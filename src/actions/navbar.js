export const HOME = 'HOME';
export const setHome = () => ({
	type: HOME
});

export const PROJECTS = 'PROJECTS';
export const setProjects = () => ({
	type: PROJECTS
});

export const ABOUT = 'ABOUT';
export const setAbout = () => ({
	type: ABOUT
});

export const BURGER = 'BURGER';
export const setBurger = burger => ({
	type: BURGER,
	burger
})