document.addEventListener("click", function (event) {

    if (event.target.id === "analyze-markdown-btn") {

        const markdown = document.getElementById("markdown-input").value;

        const words = markdown
            .trim()
            .split(/\s+/)
            .filter(word => word.length > 0);

        const headings = markdown.match(/^#{1,6}\s/gm) || [];
        const links = markdown.match(/\[.*?\]\(.*?\)/g) || [];
        const codeBlocks = markdown.match(/```/g) || [];

        const wordCount = words.length;
        const headingCount = headings.length;
        const linkCount = links.length;
        const codeBlockCount = Math.floor(codeBlocks.length / 2);
        const readingTime = Math.ceil(wordCount / 200);

        const metrics = {
            wordCount,
            headingCount,
            linkCount,
            codeBlockCount,
            readingTime
        };

        const report = generateForgeReport(metrics);

        document.getElementById("word-count").textContent = wordCount;
        document.getElementById("heading-count").textContent = headingCount;
        document.getElementById("link-count").textContent = linkCount;
        document.getElementById("code-block-count").textContent = codeBlockCount;
        document.getElementById("reading-time").textContent = readingTime;

        document.getElementById("health-score").textContent = report.score;
        document.getElementById("ai-readiness").textContent = report.readiness;
        const strengthsList = document.getElementById("strengths-list");

        strengthsList.innerHTML = "";

        report.strengths.forEach(function (strength) {

            const item = document.createElement("li");

            item.textContent = strength;

            strengthsList.appendChild(item);
            const suggestionsList = document.getElementById("suggestions-list");


        suggestionsList.innerHTML = "";


        report.suggestions.forEach(function (suggestion) {


            const item = document.createElement("li");


            item.textContent = suggestion;


            suggestionsList.appendChild(item);


        });




        });

    }

});
