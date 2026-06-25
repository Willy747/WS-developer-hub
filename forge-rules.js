function generateForgeReport(metrics) {

    let score = 100;

    let strengths = [];

    let suggestions = [];

    if (metrics.wordCount >= 200) {
        strengths.push("Good amount of content.");
    } else {
        score -= 15;
        suggestions.push("Add more content to improve context.");
    }

    if (metrics.headingCount >= 3) {
        strengths.push("Document is well organized.");
    } else {
        score -= 20;
        suggestions.push("Use more headings to organize your ideas.");
    }

    if (metrics.linkCount > 0) {
        strengths.push("Includes supporting references.");
    } else {
        score -= 10;
        suggestions.push("Consider adding links or references.");
    }

    if (metrics.codeBlockCount > 0) {
        strengths.push("Contains examples or code.");
    }

    if (metrics.readingTime > 10) {
        score -= 10;
        suggestions.push("Break large documents into smaller sections.");
    }

    if (score < 0) {
        score = 0;
    }

    let readiness = "Needs Work";

    if (score >= 90) {
        readiness = "Excellent";
    }
    else if (score >= 75) {
        readiness = "Good";
    }
    else if (score >= 60) {
        readiness = "Fair";
    }

    return {
        score,
        readiness,
        strengths,
        suggestions
    };

}
