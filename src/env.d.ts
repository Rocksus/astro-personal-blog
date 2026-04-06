/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly CONTACT_EMAIL: string;
  readonly SOCIAL_GITHUB: string;
  readonly SOCIAL_LINKEDIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
