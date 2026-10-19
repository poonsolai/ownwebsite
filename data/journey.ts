import { personal } from "@/data/personal";
import type { Milestone } from "@/types";

export const journeyMilestones: Milestone[] = [];

export type JourneyTimelineItem = {
	id: string;
	title: string;
	period: string;
	description: string;
	status: "pending" | "current" | "upcoming";
	technologies: string[];
	relatedProject?: string;
};

export const journeyTimeline: JourneyTimelineItem[] = [
	{
		id: "education",
		title: "Education",
		period: "2023 - 2027",
		description:
			"Education details have not been added to the profile yet. This chapter is kept open for the accurate dates and context.",
		status: "pending",
		technologies: [],
	},
	{
		id: "beginning",
		title: "Beginning of programming",
		period: "2023 - 2027",
		description:
			"The starting point and early influences are not documented yet. They can be added here when the details are ready.",
		status: "pending",
		technologies: [],
	},
	{
		id: "technologies",
		title: "Technologies learned",
		period: "Current focus",
		description:
			"These are the technologies currently listed in my profile. This is a working snapshot, not a claim of mastery or a dated record of when each was learned.",
		status: "current",
		technologies: personal.technologies,
	},
	{
		id: "milestones",
		title: "Important milestones",
		period: "Date not recorded",
		description:
			"Specific milestones and dates have not been recorded yet. I will add them when there is a concrete moment worth documenting.",
		status: "pending",
		technologies: [],
	},
	{
		id: "projects",
		title: "Major projects",
		period: "Date not recorded",
		description:
			"Project highlights will appear here when there are documented projects to connect to this timeline.",
		status: "pending",
		technologies: [],
	},
	{
		id: "current-stage",
		title: "Current stage",
		period: "Right now",
		description: personal.direction,
		status: "current",
		technologies: personal.technologies,
	},
	{
		id: "future-direction",
		title: "Future direction",
		period: "Looking ahead",
		description:
			"Continue developing as a software engineer by learning, building useful products, and strengthening the fundamentals behind the work.",
		status: "upcoming",
		technologies: [],
	},
];