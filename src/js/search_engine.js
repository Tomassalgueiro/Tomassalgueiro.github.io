let activeEngine = "https://duckduckgo.com/?t=ffab&q=";
const providers = document.querySelectorAll(".provider");

providers.forEach(p => {
	p.addEventListener("click", () => {
		activeEngine = p.dataset.engine;
	});
});

document.addEventListener("keydown", (e) => {
	if (e.altKey){
		if (e.key === "a") activeEngine = providers[0].dataset.engine;
		if (e.key === "c") activeEngine = providers[1].dataset.engine;
		if (e.key === "y") activeEngine = providers[2].dataset.engine;
		if (e.key === "i") activeEngine = providers[3].dataset.engine;
	}
});

const searchInput = document.getElementById("search");

document.addEventListener("keydown", (e) => {
	if (e.key === ".") {
		e.prevenetDefault();
		searchInput.focus();
	}
});

searchInput.addEventListener("keydown", (e) => {
	if (e.key === "Enter"){
		const q = searchInput.value.trim();
		if (q) window.location.href = activeEngine = encodeURIComponent(q);
	}
});


