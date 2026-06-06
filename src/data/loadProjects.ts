import { baseProjects, type Project, type Screenshot } from "./projects";

// Eagerly import every screenshot and manifest under src/assets/projects/<id>/
const imageModules = import.meta.glob<string>(
  "../assets/projects/*/*.{png,jpg,jpeg,webp,svg,gif,avif}",
  { eager: true, query: "?url", import: "default" }
);

interface RawManifest {
  title?: string;
  description?: string;
  detailedDescription?: string;
  challengesSolutions?: { challenge: string; solution: string }[];
  tags?: string[];
  link?: string;
  repo?: string;
  firefoxAddon?: string;
  visible?: boolean;
  screenshots?: { file: string; label?: string }[];
}

const manifestModules = import.meta.glob<RawManifest>(
  "../assets/projects/*/manifest.json",
  { eager: true, import: "default" }
);

// Group everything by project id (folder name)
const imagesByProject = new Map<string, Map<string, string>>();
for (const [path, url] of Object.entries(imageModules)) {
  const match = path.match(/\/projects\/([^/]+)\/([^/]+)$/);
  if (!match) continue;
  const [, projectId, file] = match;
  if (!imagesByProject.has(projectId)) imagesByProject.set(projectId, new Map());
  imagesByProject.get(projectId)!.set(file, url);
}

const manifestsByProject = new Map<string, RawManifest>();
for (const [path, manifest] of Object.entries(manifestModules)) {
  const match = path.match(/\/projects\/([^/]+)\/manifest\.json$/);
  if (!match) continue;
  manifestsByProject.set(match[1], manifest);
}

function labelFromFilename(file: string): string {
  // Strip extension, drop leading "NN-" or "NN_" ordering prefix, then humanise.
  const noExt = file.replace(/\.[^.]+$/, "");
  const stripped = noExt.replace(/^\d+[-_\s]*/, "");
  const spaced = stripped.replace(/[-_]+/g, " ").trim();
  if (!spaced) return noExt;
  return spaced
    .split(/\s+/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function buildScreenshots(projectId: string, manifest?: RawManifest): Screenshot[] {
  const images = imagesByProject.get(projectId);
  if (!images || images.size === 0) return [];

  if (manifest?.screenshots && manifest.screenshots.length > 0) {
    const result: Screenshot[] = [];
    for (const entry of manifest.screenshots) {
      const src = images.get(entry.file);
      if (!src) {
        // eslint-disable-next-line no-console
        console.warn(`[projects] manifest references missing file: ${projectId}/${entry.file}`);
        continue;
      }
      result.push({ src, label: entry.label ?? labelFromFilename(entry.file) });
    }
    return result;
  }

  // No explicit list — include all images in alphabetical (natural) order.
  return [...images.entries()]
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([file, src]) => ({ src, label: labelFromFilename(file) }));
}

function mergeProject(base: Project): Project {
  const manifest = manifestsByProject.get(base.id);
  const screenshots = buildScreenshots(base.id, manifest);
  return {
    ...base,
    ...(manifest?.title !== undefined && { title: manifest.title }),
    ...(manifest?.description !== undefined && { description: manifest.description }),
    ...(manifest?.detailedDescription !== undefined && { detailedDescription: manifest.detailedDescription }),
    ...(manifest?.challengesSolutions !== undefined && { challengesSolutions: manifest.challengesSolutions }),
    ...(manifest?.tags !== undefined && { tags: manifest.tags }),
    ...(manifest?.link !== undefined && { link: manifest.link }),
    ...(manifest?.repo !== undefined && { repo: manifest.repo }),
    ...(manifest?.firefoxAddon !== undefined && { firefoxAddon: manifest.firefoxAddon }),
    ...(manifest?.visible !== undefined && { visible: manifest.visible }),
    ...(screenshots.length > 0 && { screenshots }),
  };
}

export const projects: Project[] = baseProjects.map(mergeProject);
