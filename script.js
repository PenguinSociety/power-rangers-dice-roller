const skills = [
	"Athletics",
	"Brawn",
	"Intimidation",
	"Might",
	"Acrobatics",
	"Driving",
	"Finesse",
	"Infiltration",
	"Initiative",
	"Targeting",
	"Alertness",
	"Culture",
	"Science",
	"Survival",
	"Technology",
	"Animal Handling",
	"Deception",
	"Performance",
	"Persuasion",
	"Streetwise",
];

// Create skill level inputs
function createSkillLevelInput() {
	let html = "<legend>Select your skill die for each skill</legend>";
	for (let skill of skills) {
		html += "<p>" + skill + ": ";
		html +=
			"<select id='" +
			skill.toLowerCase().replace(/ /g, "-") +
			"-level' name='";
		html += skill.toLowerCase().replace(/ /g, "-");
		html += "-level'>";
		html += "<option value='0'>Untrained</option>";
		html += "<option value='1'>d2</option>";
		html += "<option value='2'>d4</option>";
		html += "<option value='3'>d6</option>";
		html += "<option value='4'>d8</option>";
		html += "<option value='5'>d10</option>";
		html += "<option value='6'>d12</option>";
		html += "</select></p>";
	}
	document.getElementById("skill-levels").innerHTML = html;
}

// Theme Objects
let violetTheme = {
	baseColor: "#7f00ff",
	lighterColor: "#BF80FF",
	darkerColor: "#400080",
	buttonText: "#e6e6e6",
	titleText: "#400080",
};

let greenTheme = {
	baseColor: "#007F00",
	lighterColor: "#80FF80",
	darkerColor: "#004D00",
	buttonText: "#e6e6e6",
	titleText: "#004D00",
};

let blueTheme = {
	baseColor: "#0000FF",
	lighterColor: "#8080FF",
	darkerColor: "#000080",
	buttonText: "#e6e6e6",
	titleText: "#000080",
};

let pinkTheme = {
	baseColor: "#FF69B4",
	lighterColor: "#FFD9EC",
	darkerColor: "#993F6C",
	buttonText: "#e6e6e6",
	titleText: "#993F6C",
};

let goldTheme = {
	baseColor: "#FFD900",
	lighterColor: "#FFEC80",
	darkerColor: "#806C00",
	buttonText: "#e6e6e6",
	titleText: "#806C00",
};

let greyTheme = {
	baseColor: "#808080",
	lighterColor: "#bfbfbf",
	darkerColor: "#404040",
	buttonText: "#e6e6e6",
	titleText: "#404040",
};

let redTheme = {
	baseColor: "#FF0000",
	lighterColor: "#FF8080",
	darkerColor: "#800000",
	buttonText: "#e6e6e6",
	titleText: "#800000",
};

let bronzeTheme = {
	baseColor: "#CD7F32",
	lighterColor: "#FFBF80",
	darkerColor: "#5C2E00",
	buttonText: "#e6e6e6",
	titleText: "#5C2E00",
};

let blackTheme = {
	baseColor: "#404040",
	lighterColor: "#000000",
	darkerColor: "#808080",
	buttonText: "white",
	titleText: "white",
};

let whiteTheme = {
	baseColor: "#F2F2F2",
	lighterColor: "#FFFFFF",
	darkerColor: "#D9D9D9",
	buttonText: "black",
	titleText: "#D9D9D9",
};

let silverTheme = {
	baseColor: "#808080",
	lighterColor: "#bfbfbf",
	darkerColor: "#404040",
	buttonText: "#e6e6e6",
	titleText: "#404040",
};

// This function gets the theme selector value
let themes = {
	violet: violetTheme,
	green: greenTheme,
	blue: blueTheme,
	pink: pinkTheme,
	gold: goldTheme,
	red: redTheme,
	bronze: bronzeTheme,
	white: whiteTheme,
	black: blackTheme,
	silver: silverTheme,
	grey: greyTheme,
};
function iconChange() {
	let themeSelector = document.getElementById("theme-selector").value;
	let themeObjectName = "";
	let iconHtml = "";
	if (themeSelector === "violet") {
		iconHtml +=
			"<svg viewBox='0 0 512 512'> <path id='ranger-icon' d='M163.53 21.28c-4.262.042-8.402 1.318-11.936 3.782-14.61 10.188-21.734 41.505 11.03 69.97-.874 22.855 41.786 26.99 24.845-6.657 15.375-44.718-5.465-67.27-23.94-67.094zm255.25 9.564c-6.193.008-12.997 2.884-16.78 8.625-23.15 35.122 1.875 53.016 25.875 14.936 9.863-15.65 1.23-23.575-9.094-23.562zm-41.717 63.468c-63.42 56.883-111.03 138.435-247.688 80.938 18.578 53.492-6.768 71.09-31.313 76.28-8.846-6.104-17.503-14.193-25.374-24.28l-19.282-24.72 2.625 31.25c5.134 61.565 27.576 107.054 64.782 136.376 37.207 29.322 88.146 42.22 149.25 42.22 95.388 0 181.77-60.905 213.563-148l5.344-14.657-15.408 2.186c-5.34.757-9.54.544-12.812-.28l31.688-60.157c-14.324 6.135-29.355 13.593-43.97 20.25 1.73-13.324 5.75-30.14 12.72-50.282l10.312-29.875L446.594 151c-25.463 19.87-52.84 43.613-79.78 63.25-8.948-17.862-7.626-54.075 10.248-119.938zM33.188 139.906c-8.878-.007-18.012 11.466-15.688 22.688 6.156 29.728 35.794 21.19 28.844-7.75-2.593-10.795-7.83-14.934-13.157-14.938zm401.343 44.906c-6.213 24.132-7.675 43.034-3.936 57.844 2.573 10.193 8.258 18.705 16.562 23.5 4.09 2.36 8.58 3.803 13.375 4.47-29.9 20.703-73.522 6.61-53.53-46.72-85.188 114.645-173.707 126.336-202.156 39.125-14.613 86.63-105.328 67.462-125.75-2.342 22.01 18.3 47.298 26.824 70.656 22.25 15.653-3.066 29.977-12.394 40.25-27.438 5.99-8.77 10.622-19.464 13.813-32 13.008 21.732 28.002 35.802 44.812 43.094 22.92 9.942 47.727 6.613 71.688-3.22 39.206-16.086 78.357-49.144 114.218-78.562zm-6 179.688c11.396 7.638 18.095 16.212 18.095 25.125 0 32.772-85.57 59.563-190.375 59.563-104.804 0-189.813-26.79-189.813-59.563 0-8.645 6.17-17.1 16.938-24.53-39.8 13.298-64.844 31.22-64.844 50.81 0 41.02 106.547 74.158 237.72 74.158s237.688-33.137 237.688-74.157c0-19.793-24.892-38.038-65.407-51.406z'/></svg>";
	} else if (themeSelector === "green") {
		iconHtml +=
			"<svg viewBox='0 0 512 512'> <path id='ranger-icon' d='M222.156 20.72c-1.423.01-2.843.065-4.25.155-20.084 1.29-37.527 10.342-46.375 27.03l17.626 12.532h-29.312c-10.333-5.256.412-.266-11.375-5.28-23.158-13.118-48.787-9.64-67.25 2.812-20.062 13.527-30.734 35.806-20.25 60.093l3.093 7.156-6.47 4.31c-21.435 14.36-32.997 30.393-37.124 48.126C16.34 195.39 19.65 215.64 31 238.5l2.47 5.03-3.25 4.564c-13.796 19.38-8.88 38.668 5.968 51.03 10.043 8.364 19.48 9.982 29.656 7.407 10.177-2.574 21.15-10.15 30.72-21.874l2.655-3.25 4.155-.187c27.728-1.2 49.69-11.635 63.97-27.72 14.28-16.085 21.22-37.98 17.718-63.906L184.03 182l7.25-2.5c8.066-2.768 14.73-8.15 18.814-15.53l5.28-9.564 8.626 6.72c6.39 4.976 22.988 8.397 31.375 5.968l10.28-2.97 1.564 10.595c4.3 29.362 24.393 52.534 50.06 60.155l8.25 2.438-1.75 8.437c-3.162 14.99 1.497 26.075 10.44 33.406 8.94 7.332 22.793 10.683 38.75 6.438l6.217-1.656 3.782 5.25c13.513 18.845 29.945 28.087 46.342 29.562 16.398 1.475 33.29-4.745 48.032-19.594 12.624-12.716 16.654-26.51 15.062-40.437-1.59-13.93-9.318-28.12-21.75-39.533l-8.5-7.812 9.406-6.688c7.878-5.6 10.74-15.92 8.907-25.5-1.833-9.58-7.527-16.677-16.345-17.78l-9.375-1.157 1.28-9.375c5.842-42.567-13.62-77.648-45.342-97.656-31.723-20.01-75.673-24.486-118.782-3.095l-6.72 3.344-4.717-5.876c-13.464-16.796-34.023-25.768-54.033-26.782-1.43-.072-2.857-.104-4.28-.093zm-1.22 160.31c-4.003 4.804-8.867 8.724-14.25 11.782 11.968 29.99 18.83 60.783 23.033 93.532-4.555 11.237-9.676 22.38-15.5 33.437l-.157.064c-8.54-19.537-18.073-38.957-31.188-55.75-.51.607-1.035 1.218-1.563 1.812-3.628 4.088-7.652 7.838-12 11.25 12.034 15.867 21.048 34.83 29.72 54.938 7.724 43.39 6.386 91.267-2.782 134.812-26.727 5.073-55.198 15.22-88.594 30.5h252.938c-32.428-15.282-60.268-25.46-86.688-30.53-13.95-24.116-21.036-50.13-23.25-76 9.692-45.174 28.504-71.692 57-99.282-19.276 7.68-37.422 17.31-52.687 31.937.702-3.41 1.488-6.766 2.31-10.092 9.476-24.123 23.87-45.82 42.94-65.407-5.784-2.705-11.25-5.994-16.283-9.874-12.71 13.552-23.555 28.128-32.312 43.78 7.156-19.187 12.88-38.422 18.063-57.592-5.443-6.556-10.03-13.933-13.563-21.938-4.167 16.03-8.512 31.946-13.5 47.72-4.637-23.334-11.12-46.08-20.375-68.47-.438-.204-.88-.41-1.313-.625z'/></svg>";
	} else if (themeSelector === "blue") {
		iconHtml +=
			"<svg viewBox='0 0 512 512'> <path id='ranger-icon' d='M29.805 29.777L242.14 209.55H118.712l112.54 86.784H95.995l225.656 174.012-81.537-116.05 66.487.143 179.185 138.175-171.96-244.746h84.568L248.082 29.776H29.805z'/></svg>";
	} else if (themeSelector === "pink") {
		iconHtml +=
			"<svg viewBox='0 0 512 512'> <path id='ranger-icon' d='M225.438 18.156c-15.105.14-32.56 2.526-52.407 7.844-35.26 9.45-65.035 28.973-88.374 54.844-17.668 13.755-36.98 46.39-51.437 85.97-16.415 55.046-16.447 120.304-2.157 188.155C34.84 372.91 44.14 385.08 57.5 392.093c13.36 7.01 31.353 8.776 52.688 3.062 13.473-3.608 23.028-12.44 28.812-22.75 5.784-10.31 7.226-22.05 5.313-29.187-4.335-16.17-19.078-25.202-32.313-21.658-9.02 2.417-13.433 10.27-13.5 16.97-.034 3.35.976 6.065 2.75 7.968 1.774 1.903 4.493 3.497 10 3.594l-.344 18.687c-9.57-.168-17.87-3.693-23.312-9.53s-7.856-13.482-7.78-20.906c.148-14.85 10.064-30.185 27.342-34.813 24.03-6.434 48.515 9.84 55.22 34.845 3.605 13.45.802 29.11-7.095 43.188-7.896 14.077-21.48 26.63-40.25 31.656-4.174 1.117-8.282 1.972-12.343 2.624 98.875 90.13 248.893 110.83 349.344 9.72 18.164-18.283 31.29-40.735 38.595-65.127.02-.063.044-.124.063-.187 9.94-40.298 4.91-84.342-17.5-123.156-44.153-76.474-142.198-106.276-193.094-78.28-57.27 23.11-71.688 56.892-76.625 81.874-21.635 61.008 4.65 135.55 67.686 156.375 43.724 14.443 97.45-5.348 111.656-51.25 9.364-30.262-4.29-66.992-35.437-75.532-9.543-2.616-20.58-1.58-29.438 2.658-8.858 4.237-15.41 11.2-17.78 21.093-1.297 5.42-.55 11.935 1.906 16.814 2.455 4.88 5.99 8.01 11.25 8.97 1.883.342 4.31-.074 6.28-.845-2.017-.512-3.482-1.562-4.343-2.345-1.39-1.288-3.168-3.693-3.656-6.563-.78-4.998 2.214-9.82 5.03-11.906 2.818-2.086 5.51-2.925 8.845-2.906 6.21.034 11.453 3.97 14.03 8.125 2.577 4.154 3.51 8.625 2.97 13.28v.033c-.982 8.283-6.386 14.75-12.533 18.187-6.146 3.438-13.153 4.556-19.968 3.313-11.435-2.087-20.017-9.842-24.595-18.938-4.578-9.096-5.78-19.644-3.406-29.563 3.774-15.756 14.824-27.336 27.905-33.593 13.08-6.257 28.324-7.683 42.438-3.813 42.675 11.702 60.497 59.787 48.343 99.064-17.637 56.99-82.493 80.936-135.375 63.47-68.184-22.526-99.163-97.1-84.28-163.44-18.918-16.436-34.28-39.526-40.47-62.624-14.74-55.014 32.67-114.382 82.19-130.563 42.26-13.775 79.575 5.404 60.124 39.094 33.446-28.243 15.37-79.8-57.406-79.124z'/></svg>";
	} else if (themeSelector === "gold") {
		iconHtml +=
			"<svg viewBox='0 0 512 512'> <path id='ranger-icon' d='M227.54 25.87l128.997 177.28-219.59-169.19L259.07 198.92 20.78 26.128h-.005l180.06 232.19L35.878 129.186l169.19 225.433L20.17 219.052l210.703 228.224c59.994 56.81 154.88 55.822 213.664-2.963 58.782-58.783 59.77-153.668 2.962-213.664L227.54 25.87zm128.448 222.855c27.394 0 54.786 10.45 75.686 31.35 41.8 41.8 41.8 109.574 0 151.374s-109.573 41.8-151.373 0c-41.8-41.802-41.8-109.575 0-151.376 20.9-20.9 48.295-31.35 75.688-31.35zm-6.734 20.734c-17.067.057-36.98 7.253-52.576 20.872-13.134 11.468-20.463 25.015-22.217 36.897-1.753 11.88 1.438 21.776 10.216 29.11 17.555 14.667 55.232 11.185 81.5-11.752 13.134-11.47 20.462-25.015 22.217-36.897 1.754-11.88-1.438-21.776-10.215-29.11-7.132-5.96-17.247-9.16-28.924-9.12zm47.572 124.368c-8.597.03-19.063 3.706-27.14 10.65-6.803 5.848-10.36 12.6-11.172 18.01-.812 5.41.45 9.185 4.314 12.364 7.73 6.357 27.337 5.207 40.942-6.49 6.802-5.846 10.36-12.597 11.17-18.008.813-5.412-.45-9.187-4.313-12.366-3.14-2.582-7.918-4.18-13.8-4.16z'/></svg>";
	} else if (themeSelector === "red") {
		iconHtml +=
			"<svg viewBox='0 0 512 512'> <path id='ranger-icon' d='M162.22 21.312c-183.876 106.68 51.994 227.35-10.19 332.47C116.95 413.083 38.11 325.45 43.75 227-6.035 353.376 30.21 443.745 95.22 492.75c1.386.34 17.577.498 41.186.562-28.478-16.9-32.06-75.355 32.813-103.25l15.78-7L182.062 400c-1.356 8.34-.318 13.95 1.188 16.937 1.507 2.987 3.106 3.544 5.844 4.094 5.475 1.1 16.963-2.395 26.28-14.624 18.636-24.457 29.117-80.228-26.874-167l-4.094-6.437-13.906-19.25 23.25 9.905 5.25 1.75c80.85 25.498 135.3 58.46 174.625 112.72 21.544-22.906 38.7-56.835 43.812-91.69l3.5-27.468 13.438 23.97c25.525 45.802 30.267 104.912 11.094 156.5-14.23 38.28-42.036 72.34-84 93.5 13.623-.01 24.05.032 25.25.124 154.76-34.77 139.345-244.952-14.19-394.093.012.726 0 1.46 0 2.188 78.964 185.87-136.465 189.104-119.25 11.47-41.686 100.463-132.86-2.147-91.06-91.283zM269.093 332.25c13.51 15.806 22.35 33.086 22.78 50.812.587 24.03-9.293 47.12-24.53 66.563-14.832 18.926-34.837 34.62-56.625 43.656 33.127-.065 64.926-.16 95.217-.25l-.062-.186c30.95-18.584 47.31-38.83 53.75-57.813 6.44-18.982 3.25-37.246-5.844-53.718-15.44-27.97-49.705-47.71-84.686-49.062z'/></svg>";
	} else if (themeSelector === "bronze") {
		iconHtml +=
			"<svg viewBox='0 65 512 512'> <path id='ranger-icon' d='M332.594 201.938l-44.188 84.468 109.063 9.188 62.124-7.938-35.53 20.5 13.53 9.188 56.937 10.562v-92.5l-39.31-29.53 7.5 33.718-62.845-24.688 4.188 26.125-71.47-39.093zm-129.063.593L74.157 242.97l20.625-35.25-72.874 27.686v217.47l88.75-46.97 10.47-44.5h-40.75l49.56-20.75 43.408-26.03L203.53 202.53zm143.126 107.532l-27.812 29.594 34.062 40.313 67.75 20.717 56.656 12.844-51.25 15.376 68.47 20.25v-102.25l-62.313-11.562-1.908-.375-1.625-1.095-28.437-19.313-53.594-4.5zM184.97 329.406l-43.22 25.938-13.875 59-.97 4.125-3.75 1.967-101.25 53.594v17.845h472.626v-23.22l-88.124-26.06-11.594-3.44 6.25-10.342 7.407-12.313-62.345-19.063-12.53 14.063 59.53 68.53-107.844-52.28 17.75-26.656-25.624-17.406-80.53 85.625 27.53-56.907-65.812-12.594 79-14.625 23.625-48.843-76.25-6.938z'/></svg>";
	} else if (themeSelector === "black") {
		iconHtml +=
			"<svg viewBox='0 0 512 512'> <path id='ranger-icon' d='M253.125 18.563c-131.53 0-238.375 106.813-238.375 238.343 0 131.53 106.846 238.344 238.375 238.344 131.53 0 238.344-106.815 238.344-238.344 0-131.528-106.816-238.344-238.345-238.344zm-23.938 52.093c40.517 0 77.988 12.904 108.532 34.813-5.597-.624-11.302-.97-17.064-.97-84.157 0-152.375 68.25-152.375 152.406 0 84.157 68.22 152.375 152.376 152.375 5.762 0 11.467-.313 17.063-.936-30.545 21.91-68.016 34.812-108.533 34.812-102.98 0-186.28-83.272-186.28-186.25 0-102.977 83.3-186.25 186.28-186.25z'/></svg>";
	} else if (themeSelector === "white") {
		iconHtml +=
			"<svg viewBox='0 0 512 512'> <path id='ranger-icon' d='M320.063 19.72c-72.258 14.575-19.248 71.693-74.344 108.81 4.846-.49 9.746-.702 14.655-.624 16.288.26 32.785 3.72 48.594 10.72 4.96 2.196 9.723 4.667 14.25 7.405 12.107-47.476-37.103-96.38-3.158-126.31zM136.75 44.47c-40.76 61.357 36.984 64.33 24.406 129.405 17.407-21.255 41.17-35.9 67.156-42.313-25.006-42.138-94.4-41.924-91.562-87.093zm297.313 75.405c-32.547.872-45.475 46.314-96.594 36.22 21.35 17.42 36.034 41.25 42.467 67.31 42.306-24.92 42.053-94.466 87.282-91.624-13.43-8.92-24.06-12.15-33.158-11.905zm-177.97 26.656c-23.656.46-46.53 8.82-64.906 23.626l18.657 36.156L170 193.156c-3.576 5.264-6.737 10.908-9.406 16.938-8.726 19.708-11.002 40.59-7.78 60.344l44.78 2.125-34 30.312c10.798 20.622 28.414 37.852 51.406 48.03 3.077 1.364 6.186 2.574 9.313 3.626l24.53-38.25 9.095 43.814c27.3.075 53.737-10.387 73.593-29.188l-19.186-37.125 38.406 12.658c1.822-3.188 3.512-6.506 5.03-9.938 9.746-22.01 11.457-45.498 6.44-67.22l-37.626-1.75 27.687-24.718c-10.83-20.194-28.236-37.07-50.874-47.093-1.37-.607-2.745-1.176-4.125-1.72l-25.874 40.313-9.906-47.75c-.5-.016-1-.023-1.5-.032-1.3-.02-2.61-.024-3.906 0zM133.407 186.5c-41.652.725-82.483 34.847-108.72 5.094 14.573 72.234 71.664 19.3 108.783 74.312-2.154-20.972.934-42.758 10.06-63.375 2.178-4.915 4.637-9.604 7.345-14.093-5.822-1.47-11.642-2.038-17.47-1.937zm249.5 53.97c2.204 21.047-.867 42.926-10.03 63.624l-.188.375c-2.143 4.796-4.57 9.393-7.22 13.78 47.524 12.244 96.507-37.137 126.47-3.156-14.603-72.388-71.92-19.04-109.032-74.625zM136.53 283.405c-42.123 25.014-41.928 94.37-87.093 91.53 61.422 40.803 64.322-37.123 129.594-24.342-21.344-17.385-36.03-41.167-42.5-67.188zm219.064 48.906c-17.406 21.46-41.236 36.24-67.344 42.72 24.944 42.263 94.497 42.004 91.656 87.218 40.867-61.52-37.402-64.358-24.312-129.938zM193.406 360.72c-12.047 47.456 37.087 96.33 3.156 126.25 72.305-14.587 19.195-71.79 74.47-108.908-21.04 2.204-42.898-.9-63.594-10.062-4.884-2.162-9.57-4.594-14.032-7.28z'/></svg>";
	} else if (themeSelector === "silver") {
		iconHtml +=
			"<svg viewBox='20 55 512 512'> <path id='ranger-icon' d='M413.375 69.906L336.937 191.47l-8.25-32.69-30.218 88.97 62.655-29.375.22 29.438 127.03-50.938-70.813-1.97 47.782-68.686-73.47 39.25 21.5-95.564zM210.22 102.094l-32 14.406 16.874 55.656-177.813 80.03 12.564 27.876L207.656 200l30.406 49.47 49.313-22.19-21.344-70.343-55.81-54.843zM197.593 266.78v20.345h-88.906c15.994 38.807 51.225 65.43 88.906 74.28v32.97h58.562c-12.118 30.528-33.505 55.684-58.47 77.594H172.22v18.686H456.56V471.97h-27.406c-28.734-21.895-50.055-47.018-61.625-77.595h63.658v-29.188c19.748-6.995 39.5-19.51 59.25-36.687-19.812-17.523-39.23-27.25-59.25-31.938v-29.78H197.594z'/></svg>";
	} else if (themeSelector === "grey") {
		iconHtml +=
			"<svg viewBox='0 0 512 512'> <path id='ranger-icon' d='M258.396 21.375l-17.503 64.1c-1.133 2.452-1.782 5.172-1.782 8.05 0 10.634 8.62 19.256 19.255 19.256 10.634 0 19.256-8.62 19.256-19.255 0-.72-.045-1.426-.122-2.125h.022l-.05-.18c-.23-1.917-.737-3.746-1.488-5.45l-17.586-64.395zm118.21 31.494l-46.21 45.77c-6.03 3.254-10.126 9.626-10.126 16.956 0 10.633 8.622 19.254 19.255 19.254.668 0 1.327-.034 1.977-.1 7.608 5.175 14.85 11.125 21.6 17.875 57.872 57.872 57.87 151.418 0 209.29-6.75 6.747-13.99 12.694-21.594 17.868-.65-.066-1.308-.1-1.975-.1-10.634 0-19.256 8.623-19.256 19.256 0 7.006 3.757 13.12 9.352 16.49l46.694 46.252-18.545-70.55c6.468-4.81 12.67-10.137 18.536-16.003l6.608-6.61-.334-.332c3.252-3.637 6.305-7.388 9.183-11.23l71.057 18.68-51.63-52.126c6.54-15.08 10.757-30.926 12.636-46.996l70.61-19.282-70.56-19.267c-1.82-15.925-5.937-31.633-12.343-46.59l51.234-51.727-70.318 18.483c-4.842-6.536-10.22-12.8-16.144-18.723-5.794-5.794-11.916-11.063-18.298-15.824l18.587-70.717zm-236.307.005l17.112 65.107c.218 1.76.662 3.45 1.322 5.032l.153.582c-6.38 4.76-12.498 10.023-18.29 15.814-5.92 5.92-11.294 12.18-16.136 18.715L54.024 139.61l51.31 51.802c-6.41 14.945-10.535 30.64-12.376 46.553l-70.562 19.27L92.95 276.5c1.856 16.108 6.06 31.994 12.595 47.105l-51.574 52.07 70.952-18.648c4.722 6.312 9.94 12.368 15.676 18.102 5.815 5.814 11.96 11.102 18.367 15.876-1.004 2.215-1.613 4.646-1.707 7.213l-16.678 63.456 48.91-48.447-.037-.08c3.86-3.52 6.297-8.575 6.297-14.21 0-10.634-8.622-19.256-19.256-19.256-.395 0-.786.015-1.176.04-7.573-5.16-14.783-11.088-21.506-17.81-57.872-57.872-57.872-151.417 0-209.29 6.725-6.723 13.938-12.65 21.514-17.81.39.022.782.036 1.178.036 10.634 0 19.254-8.62 19.254-19.254 0-6.22-2.963-11.736-7.54-15.256L140.3 52.875zm127.436 89.87v49.02l33.602 19.292 46.18-25.045-79.782-43.268zm-18.69.312l-79.722 42.957 46.31 24.955 33.413-19.062v-48.85zM159.9 202.164v114.012l46.346-24.975v-64.063L159.9 202.164zm196.985.027l-46.342 25.134v63.7l46.342 25.136V202.19zm-98.367 5.83l-33.584 19.158v64.285l33.584 19.162 33.336-19.145v-64.318l-33.336-19.14zm43.082 99.416l-33.864 19.445v47.056l78.24-42.432-44.376-24.068zm-86.24.084l-44.495 23.976 78.182 42.127v-46.885L215.36 307.52zm43.005 94.234c-10.634 0-19.254 8.622-19.254 19.256 0 2.74.582 5.342 1.615 7.703l17.67 64.713 17.787-65.12c.57-1.39.965-2.86 1.197-4.388l.06-.23h-.026c.122-.878.207-1.767.207-2.678 0-10.634-8.62-19.256-19.255-19.256z'/></svg>";
	}
	return {
		icon: iconHtml,
		theme: themeSelector,
		themeObject: themes[themeSelector],
	};
}

// This function tells the theme to change
function changeTheme(theme) {
	console.log("html: ", theme.icon);
	document.getElementById("ranger-icon-div").innerHTML = theme.icon;
	let rangerIcon = document.getElementById("ranger-icon");
	rangerIcon.classList.add("default-theme");
	rangerIcon.classList.replace(rangerIcon.classList[0], theme.theme + "-theme");
	document.documentElement.style.setProperty(
		"--base-theme-color",
		theme.themeObject.baseColor
	);
	document.documentElement.style.setProperty(
		"--lighter-theme-color",
		theme.themeObject.lighterColor
	);
	document.documentElement.style.setProperty(
		"--darker-theme-color",
		theme.themeObject.darkerColor
	);
	document.documentElement.style.setProperty(
		"--button-text-color",
		theme.themeObject.buttonText
	);
	document.documentElement.style.setProperty(
		"--title-text-color",
		theme.themeObject.titleText
	);
}

function openSkillsModal() {
	let skillsSection = document.getElementById("skills-section");
	skillsSection.style.display = "block";
}

function closeSkillsModal() {
	let skillsSection = document.getElementById("skills-section");
	skillsSection.style.display = "none";
}

function openDiceBagModal() {
	let diceBag = document.getElementById("custom-dice-pool");
	diceBag.style.display = "grid";
}

function closeDiceBagModal() {
	let diceBag = document.getElementById("custom-dice-pool");
	diceBag.style.display = "none";
}

// Save quick rolls
function nameQuickRoll() {
	document.getElementById("create-quick-roll").style.display = "block";
}

function cancelQuickRoll() {
	document.getElementById("create-quick-roll").style.display = "none";
}

function confirmQuickRoll() {
	// Get existing saved rolls from localStorage, or create empty array if none exist
	let savedRolls = localStorage.getItem("quickRolls");
	let rollsArray = savedRolls ? JSON.parse(savedRolls) : [];

	// Gather all the current form values
	let qrSkill = document.getElementById("skills").value;
	let qrEdgeSnag = document.querySelector(
		"input[name='edge-snag']:checked"
	).value;
	let qrUpshift = document.getElementById("upshift").value;
	let qrDownshift = document.getElementById("downshift").value;
	let qrSpecialization = document.getElementById("specialization").checked;
	let qrOtherBonus = document.getElementById("other-modifier").value;
	let qrName = document.getElementById("quick-roll-name").value;

	let qrObject = {
		name: qrName,
		skill: qrSkill,
		edgeSnag: qrEdgeSnag,
		upshift: qrUpshift,
		downshift: qrDownshift,
		specialization: qrSpecialization,
		otherBonus: qrOtherBonus,
	};

	rollsArray.push(qrObject);
	localStorage.setItem("quickRolls", JSON.stringify(rollsArray));

	document.getElementById("quick-roll-name").value = "";
	document.getElementById("create-quick-roll").style.display = "none";

	displayQuickRolls();
}

function displayQuickRolls() {
	let savedRolls = localStorage.getItem("quickRolls");

	if (!savedRolls) {
		document.getElementById("quick-roll-div").innerHTML =
			"<p>No saved quick rolls yet.</p>";
		return;
	}

	let rollsArray = JSON.parse(savedRolls);
	let html = "<h2>Quick Rolls</h2>";

	for (let i = 0; i < rollsArray.length; i++) {
		html += `<button class="quick-roll-btn" data-index="${i}">${rollsArray[i].name}</button> `;
		html += `<button class="delete-roll-btn" data-index="${i}">Delete</button><br>`;
	}

	document.getElementById("quick-roll-div").innerHTML = html;
}

function triggerQuickRoll(index) {
	let savedRolls = localStorage.getItem("quickRolls");
	let rollsArray = JSON.parse(savedRolls);
	let roll = rollsArray[index];

	document.getElementById("skills").value = roll.skill;
	document.querySelector(
		`input[name='edge-snag'][value='${roll.edgeSnag}']`
	).checked = true;
	document.getElementById("upshift").value = roll.upshift;
	document.getElementById("downshift").value = roll.downshift;
	document.getElementById("specialization").checked = roll.specialization;
	document.getElementById("other-modifier").value = roll.otherBonus;

	let rollData = rollSkill();
	pushToRollHistory(rollData);
}

function deleteQuickRoll(index) {
	let savedRolls = localStorage.getItem("quickRolls");
	let rollsArray = JSON.parse(savedRolls);

	rollsArray.splice(index, 1);

	localStorage.setItem("quickRolls", JSON.stringify(rollsArray));

	displayQuickRolls();
}

// Save and load character data
function createCharacterObject() {
	let characterName = document.getElementById("character-name").value;
	let chosenTheme = document.getElementById("theme-selector").value;
	let skillsData = [];
	for (let skill of skills) {
		let lowerCaseSkill = skill.toLowerCase().replace(/ /g, "-");
		let skillLevel = document.getElementById(lowerCaseSkill + "-level").value;
		skillsData.push(skillLevel);
	}

	let savedRolls = localStorage.getItem("quickRolls");
	let quickRolls = savedRolls ? JSON.parse(savedRolls) : [];

	return {
		name: characterName,
		theme: chosenTheme,
		skills: skillsData,
		quickRolls: quickRolls,
	};
}

function saveCharacterData() {
	let characterData = createCharacterObject();
	localStorage.setItem("rangerCharacterData", JSON.stringify(characterData));
	alert("Character data saved!");
}

function loadCharacterData() {
	let savedData = localStorage.getItem("rangerCharacterData");
	if (savedData) {
		let parsedData = JSON.parse(savedData);
		document.getElementById("character-name").value = parsedData.name;
		document.getElementById("theme-selector").value = parsedData.theme;
		let theme = iconChange();
		changeTheme(theme);
		for (let i = 0; i < skills.length; i++) {
			let lowerCaseSkill = skills[i].toLowerCase().replace(/ /g, "-");
			document.getElementById(lowerCaseSkill + "-level").value =
				parsedData.skills[i];
		}

		if (parsedData.quickRolls) {
			localStorage.setItem("quickRolls", JSON.stringify(parsedData.quickRolls));
			displayQuickRolls();
		}
	}
}

function downloadCharacterData() {
	let characterData = createCharacterObject();
	let jsonString = JSON.stringify(characterData);
	let blob = new Blob([jsonString], { type: "application/json" });
	let url = URL.createObjectURL(blob);
	let a = document.createElement("a");
	a.href = url;
	a.download = characterData.name + "_ranger_character.json";
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	URL.revokeObjectURL(url);
}

function getFileInput() {
	let fileInput = document.getElementById("import-skills-file");
	let file = fileInput.files[0];
	if (!file) {
		alert("No file selected.");
		return;
	}
	let reader = new FileReader();
	reader.onload = function (e) {
		let jsonString = e.target.result;
		let characterData = JSON.parse(jsonString);
		document.getElementById("character-name").value = characterData.name;
		document.getElementById("theme-selector").value = characterData.theme;
		let theme = iconChange();
		changeTheme(theme);
		for (let i = 0; i < skills.length; i++) {
			let lowerCaseSkill = skills[i].toLowerCase().replace(/ /g, "-");
			document.getElementById(lowerCaseSkill + "-level").value =
				characterData.skills[i];
		}

		if (characterData.quickRolls) {
			localStorage.setItem(
				"quickRolls",
				JSON.stringify(characterData.quickRolls)
			);
			displayQuickRolls();
		}
	};
	reader.readAsText(file);
}

// Auto-select snag if skill is untrained
function skillSelected() {
	let skillSelector = document.getElementById("skills").value + "-level";
	let skillLevelValue = document.getElementById(skillSelector).value;
	if (skillLevelValue === "0") {
		document.getElementById("snag").checked = true;
	} else {
		document.getElementById("none").checked = true;
	}
}

// Roll D20s
function rollD20() {
	let edgeSnagCheck = document.querySelector("input[name='edge-snag']:checked");
	let edgeSnagValue = edgeSnagCheck.value;
	console.log("Edge/Snag Value:", edgeSnagValue);
	let rollOne = Math.floor(Math.random() * 20) + 1;
	let rollTwo = Math.floor(Math.random() * 20) + 1;
	console.log("Roll 1:", rollOne, "Roll 2:", rollTwo);
	let edgeRoll = Math.max(rollOne, rollTwo);
	let snagRoll = Math.min(rollOne, rollTwo);
	if (edgeSnagValue === "edge") {
		let finalD20 = edgeRoll;
		console.log("Result:", finalD20);
		return {
			result: finalD20,
			rolls: [rollOne, rollTwo],
			modifier: "edge",
		};
	} else if (edgeSnagValue === "snag") {
		let finalD20 = snagRoll;
		console.log("Result:", finalD20);
		return {
			result: finalD20,
			rolls: [rollOne, rollTwo],
			modifier: "snag",
		};
	} else {
		let finalD20 = rollOne;
		console.log("Result:", finalD20);
		return {
			result: finalD20,
			rolls: [rollOne],
			modifier: "",
		};
	}
}

// Roll skill die
function rollSkillCheck() {
	let skillName = document.getElementById("skills").value;
	console.log("Selected skill:", skillName);
	let skillLevel = parseInt(
		document.getElementById(skillName + "-level").value
	);
	console.log("Skill level:", skillLevel);
	let upshiftVal = parseInt(document.getElementById("upshift").value) || 0;
	let downshiftVal = parseInt(document.getElementById("downshift").value) || 0;
	let effectiveLevel = Math.max(
		0,
		Math.min(skillLevel + (upshiftVal - downshiftVal), 6)
	);
	console.log(
		"Upshift: ",
		upshiftVal,
		" | Downsift: ",
		downshiftVal,
		" | Effective Level: ",
		effectiveLevel
	);
	let specializationCheck = document.getElementById("specialization");
	if (specializationCheck.checked) {
		let specializedRolls = [];
		let skillDice = [];
		for (let i = 1; i <= effectiveLevel; i++) {
			let specRoll = Math.floor(Math.random() * (i * 2)) + 1;
			specializedRolls.push(specRoll);
			let dieSides = "D" + i * 2;
			skillDice.push(dieSides);
		}
		let skillDieResult = Math.max(...specializedRolls);
		console.log("Rolling ", skillName, " with specialization. ", "Results: ");
		let displayArray = [];
		for (let i = 1; i <= effectiveLevel; i++) {
			if (
				specializedRolls[i - 1] > 2 &&
				specializedRolls[i - 1] === skillDieResult &&
				specializedRolls[i - 1] === i * 2
			) {
				let dieResult = skillDice[i - 1] + ": " + specializedRolls[i - 1];
				displayArray.push(dieResult);
				console.log("Highest roll and potential critial: ", dieResult);
			} else if (specializedRolls[i - 1] === skillDieResult) {
				let dieResult = skillDice[i - 1] + ": " + specializedRolls[i - 1];
				displayArray.push(dieResult);
				console.log("Highest roll: ", dieResult);
			} else if (
				specializedRolls[i - 1] > 2 &&
				specializedRolls[i - 1] === i * 2
			) {
				let dieResult = skillDice[i - 1] + ": " + specializedRolls[i - 1];
				displayArray.push(dieResult);
				console.log("Potential critical with: ", dieResult);
			} else {
				let dieResult = skillDice[i - 1] + ": " + specializedRolls[i - 1];
				displayArray.push(dieResult);
				console.log("Rejected rolls: ", dieResult);
			}
		}
		console.log(
			"Values rolled: ",
			specializedRolls,
			" | Skill die rolled: ",
			skillDice,
			" | Array check: ",
			displayArray
		);
		return {
			skill: skillName,
			level: effectiveLevel,
			upshift: upshiftVal,
			downshift: downshiftVal,
			result: skillDieResult,
			dice: skillDice,
			rolls: specializedRolls,
			modifier: "with specialization",
		};
	} else if (effectiveLevel != 0) {
		let skillDieResult = Math.floor(Math.random() * (effectiveLevel * 2)) + 1;
		let skillDie = "D" + effectiveLevel * 2;
		console.log("Skill die result:", skillDieResult);
		return {
			skill: skillName,
			upshift: upshiftVal,
			downshift: downshiftVal,
			level: effectiveLevel,
			result: skillDieResult,
			dice: [skillDie],
			rolls: [skillDieResult],
			modifier: "normal",
		};
	} else {
		console.log("Skill is untrained");
		return {
			skill: skillName,
			upshift: upshiftVal,
			downshift: downshiftVal,
			level: effectiveLevel,
			result: 0,
			dice: [],
			rolls: [],
			modifier: "untrained",
		};
	}
}

// Put the dice rolls together and update the display
function rollSkill() {
	let d20Data = rollD20();
	let skillCheckData = rollSkillCheck();
	let additionalModifier =
		parseInt(document.getElementById("other-modifier").value) || 0;
	let total = d20Data.result + skillCheckData.result + additionalModifier;
	let capitalizedSkill = skillCheckData.skill
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
	let resultDisplayString = "";
	resultDisplayString += "<h3>Your Roll: " + capitalizedSkill;
	if (
		d20Data.modifier === "edge" &&
		skillCheckData.modifier === "with specialization"
	) {
		resultDisplayString += " D" + skillCheckData.level * 2;
		resultDisplayString += " with Edge";
		resultDisplayString += " and Specialization</h3>";
	} else if (
		d20Data.modifier === "snag" &&
		skillCheckData.modifier === "with specialization"
	) {
		resultDisplayString += " D" + skillCheckData.level * 2;
		resultDisplayString += " with Snag";
		resultDisplayString += " and Specialization</h3>";
	} else if (d20Data.modifier === "edge" && skillCheckData.level === 0) {
		resultDisplayString += " with Edge</h3>";
	} else if (d20Data.modifier === "snag" && skillCheckData.level === 0) {
		resultDisplayString += " with Snag</h3>";
	} else if (d20Data.modifier === "edge") {
		resultDisplayString += " D" + skillCheckData.level * 2;
		resultDisplayString += " with Edge</h3>";
	} else if (d20Data.modifier === "snag") {
		resultDisplayString += " D" + skillCheckData.level * 2;
		resultDisplayString += " with Snag</h3>";
	} else if (skillCheckData.modifier === "with specialization") {
		resultDisplayString += " D" + skillCheckData.level * 2;
		resultDisplayString += " with Specialization</h3>";
	} else if (skillCheckData.level > 0) {
		resultDisplayString += " D" + skillCheckData.level * 2 + "</h3>";
	} else {
		resultDisplayString += "</h3>";
	}
	if (skillCheckData.upshift !== 0 || skillCheckData.downshift !== 0) {
		resultDisplayString +=
			"<p>(Upshift: " +
			skillCheckData.upshift +
			", Downshift: " +
			skillCheckData.downshift +
			")</p>";
	}
	resultDisplayString += "<p><strong>D20 Result: </strong>";
	if (d20Data.modifier === "edge") {
		if (d20Data.rolls[0] === d20Data.result) {
			resultDisplayString +=
				d20Data.rolls[0] +
				" | " +
				"<span class='rejected-roll'>" +
				d20Data.rolls[1] +
				"</span></p>";
		} else {
			resultDisplayString +=
				"<span class='rejected-roll'>" +
				d20Data.rolls[0] +
				"</span> | " +
				d20Data.rolls[1] +
				"</p>";
		}
	} else if (d20Data.modifier === "snag") {
		if (d20Data.rolls[0] === d20Data.result) {
			resultDisplayString +=
				d20Data.rolls[0] +
				" | " +
				"<span class='rejected-roll'>" +
				d20Data.rolls[1] +
				"</span></p>";
		} else {
			resultDisplayString +=
				"<span class='rejected-roll'>" +
				d20Data.rolls[0] +
				"</span> | " +
				d20Data.rolls[1] +
				"</p>";
		}
	} else {
		resultDisplayString += d20Data.result + "</p>";
	}
	resultDisplayString += "<p><strong>Skill die result:</strong> ";
	if (skillCheckData.modifier === "with specialization") {
		let i = 0;
		let critValue = 2;
		for (let roll of skillCheckData.rolls) {
			// Check if the roll is the highest result, greater than 2, and a critical
			if (roll === skillCheckData.result && roll > 2 && roll === critValue) {
				resultDisplayString +=
					"<br>" +
					skillCheckData.dice[i] +
					" rolled <span class='critical-highest-roll'>" +
					roll +
					"</span> ";
			} else if (roll > 2 && roll === critValue) {
				resultDisplayString +=
					"<br>" +
					skillCheckData.dice[i] +
					" rolled <span class='critical-roll'>" +
					roll +
					"</span>";
			} else if (roll === skillCheckData.result) {
				resultDisplayString +=
					"<br>" +
					skillCheckData.dice[i] +
					" rolled <span class='highest-roll'>" +
					roll +
					"</span> ";
			} else {
				resultDisplayString +=
					"<br>" +
					skillCheckData.dice[i] +
					" rolled <span class='rejected-roll'>" +
					roll +
					"</span> ";
			}
			i++;
			critValue += 2;
		}
	} else if (skillCheckData.modifier === "normal") {
		resultDisplayString += skillCheckData.dice + " rolled ";
		if (
			skillCheckData.result === skillCheckData.level * 2 &&
			skillCheckData.result > 2
		) {
			resultDisplayString +=
				"<span class='critical-highest-roll'>" +
				skillCheckData.result +
				"</span>";
		} else {
			resultDisplayString += skillCheckData.result;
		}
	} else {
		resultDisplayString += "No skill die rolled.";
	}
	if (additionalModifier !== 0) {
		resultDisplayString +=
			"</p><p><strong>Additional Modifier: </strong>" +
			"+" +
			additionalModifier;
	}
	resultDisplayString += "</p><p><strong>Total Result: </strong>" + total;
	resultDisplayString += "</p>";
	console.log(resultDisplayString);
	let resultDiv = document.getElementById("roll-result");
	resultDiv.innerHTML = resultDisplayString;

	return {
		d20: d20Data,
		skillCheck: skillCheckData,
		totalRoll: total,
		modifier: additionalModifier,
	};
}

let diceSides = [2, 4, 6, 8, 10, 12, 20, 100];

// Custom dice
function createDiceBag() {
	let diceBagHTML = "";
	diceBagHTML +=
		"<div id='dx-container'>" +
		"<p>DX:</p>" +
		"<label for='dx-input'>Value of X: </label>" +
		"<input type='number' id='dx-input' name='dx-input' value='0' />" +
		"<br>" +
		"<label for='dx-roll-amount'>Number of DX dice to roll: </label>" +
		"<input type='number' id='dx-roll-amount' name='dx-roll-amount' value='0'>" +
		"</div>";
	for (let side of diceSides) {
		diceBagHTML +=
			"<div id='d" +
			side +
			"-container'>" +
			"<p>D" +
			side +
			":</p>" +
			"<label for='d" +
			side +
			"-roll-amount'>Number of D" +
			side +
			" dice to roll: </label>" +
			"<input type='number' id='d" +
			side +
			"-roll-amount' name='d" +
			side +
			"-roll-amount' value='0'>" +
			"</div>";
	}
	diceBagHTML +=
		"<br><button id='roll-custom-pool'>" +
		"Roll custom dice pool" +
		"</button>";
	document.getElementById("dice-bag").innerHTML = diceBagHTML;
	let customPoolHTML =
		"<h3>Custom Pool Results</h3>" +
		"<div id='dx-results'><h4>DX Rolls</h4></div>";
	for (let side of diceSides) {
		customPoolHTML +=
			"<div id='d" + side + "-results'><h4>D" + side + " Rolls</h4></div>";
	}
	document.getElementById("custom-pool-results").innerHTML = customPoolHTML;
}
function customDicePool() {
	// DX
	let xValue = document.getElementById("dx-input").value;
	let dxCount = document.getElementById("dx-roll-amount").value;
	let dxRolls = [];
	for (let i = 0; i < dxCount; i++) {
		let dxRoll = ` ${Math.floor(Math.random() * xValue) + 1}`;
		dxRolls.push(dxRoll);
	}
	document.getElementById(
		"dx-results"
	).innerHTML = `<h4>DX Rolls</h4><p>${dxRolls}</p>`;
	// Other dice
	let customPoolResults = {};
	for (let side of diceSides) {
		let key = "D" + side;
		customPoolResults[key] = [];
		let rollQuantity = document.getElementById(
			"d" + side + "-roll-amount"
		).value;
		for (let i = 0; i < rollQuantity; i++) {
			let roll = ` ${Math.floor(Math.random() * side) + 1}`;
			customPoolResults[key].push(roll);
		}
		document.getElementById("d" + side + "-results").innerHTML =
			"<h4>" + key + " Rolls</h4>" + "<p>" + customPoolResults[key] + "</p>";
	}
	return {
		xDieValue: xValue,
		xDieCount: dxCount,
		xDieRolls: dxRolls,
		diceBagResults: customPoolResults,
	};
}
// push roll results to roll history
function pushToRollHistory(rollData, customPoolData) {
	let e = new Date(Date.now());
	let localTime = e.toLocaleString();
	let rollMessage = `<p class="timestamp">${localTime}</p>`;
	let historyEntries = [];

	if (customPoolData === undefined) {
		let modifierArray = [];
		if (rollData.d20.modifier) {
			modifierArray.push(rollData.d20.modifier);
		}
		let upshiftString = ``;
		if (rollData.skillCheck.upshift > 0) {
			upshiftString = `+${rollData.skillCheck.upshift} upshift`;
			modifierArray.push(upshiftString);
		}
		let downshiftString = ``;
		if (rollData.skillCheck.downshift > 0) {
			downshiftString = `-${rollData.skillCheck.downshift} downshift`;
			modifierArray.push(downshiftString);
		}
		let otherModString = ``;
		if (rollData.modifier > 0) {
			otherModString = `+${rollData.modifier}`;
			modifierArray.push(otherModString);
		}
		let specializationString = ``;
		if (rollData.skillCheck.modifier === "with specialization") {
			specializationString = `specialization`;
			modifierArray.push(specializationString);
		}
		if (modifierArray.length > 0) {
			rollMessage += `<h3>You rolled ${rollData.skillCheck.skill} (D${
				rollData.skillCheck.level * 2
			}) with `;
			for (let i = 0; i < modifierArray.length; i++) {
				if (modifierArray.length === 1) {
					rollMessage += `${modifierArray[i]}.</h3>`;
				} else if (modifierArray.length === 2 && i === 0) {
					rollMessage += `${modifierArray[i]} and `;
				} else if (modifierArray.length === 2 && i === 1) {
					rollMessage += `${modifierArray[i]}.</h3>`;
				} else if (modifierArray.length > 2 && i === modifierArray.length - 1) {
					rollMessage += `and ${modifierArray[i]}.</h3>`;
				} else {
					rollMessage += `${modifierArray[i]}, `;
				}
			}
		} else {
			rollMessage += `<h3>You rolled ${rollData.skillCheck.skill} (D${
				rollData.skillCheck.level * 2
			}).</h3>`;
		}
		let formattedD20Strings = [];
		for (let roll of rollData.d20.rolls) {
			if (roll === rollData.d20.result) {
				let d20String = `${roll}`;
				formattedD20Strings.push(d20String);
			} else {
				let d20String = `<span class="rejected-roll">${roll}</span>`;
				formattedD20Strings.push(d20String);
			}
		}
		rollMessage += `<p>D20: `;
		for (string of formattedD20Strings) {
			rollMessage += `(${string})`;
		}
		rollMessage += `</p>`;
		let skillCheckString = ``;
		let skillRollStrings = [];
		for (let i = 0; i < rollData.skillCheck.rolls.length; i++) {
			if (rollData.skillCheck.rolls[i] === rollData.skillCheck.result) {
				skillCheckString = `${rollData.skillCheck.dice[i]}: (${rollData.skillCheck.rolls[i]}) `;
				skillRollStrings.push(skillCheckString);
			} else {
				let skillCheckString = `${rollData.skillCheck.dice[i]}: <span class="rejected-roll">(${rollData.skillCheck.rolls[i]})</span> `;
				skillRollStrings.push(skillCheckString);
			}
		}
		rollMessage += `<p>`;
		for (string of skillRollStrings) {
			rollMessage += `${string}`;
		}
		rollMessage += `</p>`;

		rollMessage += `<p>Total: ${rollData.totalRoll}</p>`;

		document.getElementById("hist-default-msg").style.display = "none";
		historyEntries.push(rollMessage);
		for (let i = 0; i < historyEntries.length; i++) {
			document.getElementById("roll-history-div").innerHTML =
				historyEntries[i] +
				document.getElementById("roll-history-div").innerHTML;
		}
	} else {
		rollMessage += `<h3>Rolled custom pool</h3>`;
		let customPoolResultsString = JSON.stringify(customPoolData.diceBagResults);
		rollMessage += `<p>${customPoolResultsString}</p>`;
		historyEntries.push(rollMessage);
		for (let i = 0; i < historyEntries.length; i++) {
			document.getElementById("roll-history-div").innerHTML =
				historyEntries[i] +
				document.getElementById("roll-history-div").innerHTML;
		}
	}
}

//Open the instructions and credits box
function openInstructions() {
	let instructions = document.getElementById("instructions-credits-modal");
	instructions.style.display = "block";
}

// Event listneners
document.addEventListener("DOMContentLoaded", function () {
	createSkillLevelInput();
	loadCharacterData();
	createDiceBag();
	displayQuickRolls();
	document
		.getElementById("edit-skills-button")
		.addEventListener("click", openSkillsModal);
	document
		.getElementById("modal-close")
		.addEventListener("click", closeSkillsModal);
	document
		.getElementById("download-character-button")
		.addEventListener("click", function () {
			saveCharacterData();
			downloadCharacterData();
		});
	document.getElementById("roll-button").addEventListener("click", function () {
		let rollData = rollSkill();
		pushToRollHistory(rollData);
	});
	document
		.getElementById("theme-selector")
		.addEventListener("input", function () {
			let theme = iconChange();
			changeTheme(theme);
		});
	document.getElementById("skills").addEventListener("input", skillSelected);
	document
		.getElementById("import-character-button")
		.addEventListener("click", function () {
			getFileInput();
		});
	document
		.getElementById("roll-custom-pool")
		.addEventListener("click", function () {
			let customPoolData = customDicePool();
			let rollData = undefined;
			pushToRollHistory(rollData, customPoolData);
		});
	document
		.getElementById("open-dice-bag")
		.addEventListener("click", openDiceBagModal);
	document
		.getElementById("dice-bag-close")
		.addEventListener("click", closeDiceBagModal);
	document.getElementById("save-roll").addEventListener("click", nameQuickRoll);
	document
		.getElementById("cancel-quick-roll")
		.addEventListener("click", cancelQuickRoll);
	document
		.getElementById("confirm-quick-roll")
		.addEventListener("click", confirmQuickRoll);
	document
		.getElementById("open-instructions-modal")
		.addEventListener("click", openInstructions);
	document
		.getElementById("quick-roll-div")
		.addEventListener("click", function (e) {
			if (e.target.classList.contains("quick-roll-btn")) {
				let index = parseInt(e.target.getAttribute("data-index"));
				triggerQuickRoll(index);
			} else if (e.target.classList.contains("delete-roll-btn")) {
				let index = parseInt(e.target.getAttribute("data-index"));
				deleteQuickRoll(index);
			}
		});
});

// To-do:
// 1. Styling
// 2. Discord integration
// 3. Instructions
// 4. Make the custom pool entry look better in the roll history
// 5. Refactor and scrub development comments

// Reminders:
// Keep track of assets used for attribution purposes
