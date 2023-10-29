import { CollectionConfig } from "payload/types";

export const Pages: CollectionConfig = {
  fields: [{ name: "title", required: true, type: "text" }],
  slug: "pages",
};
