import * as z from "zod";

export const createLinkSchema = z.object({
	foliolinks: z
		.object({
			projectName: z
				.string()
				.min(1, { message: "Project name is required" })
				.trim(),
			projectLink: z
				.string()
				.url()
				.min(1, { message: "URL is required" })
				.trim(),
		})
		.array(),
});

export type TCreateLinksValues = z.infer<typeof createLinkSchema>;
