/**
 * Created by pieter on 22-3-17.
 */

events.on("progress", function () {
    console.log("progress---TEST");
});

function addGenCompletedEvent(originalDestination) {
    events.on("generatorCompleted", function () {
        //Go to original destination
        window.location.href = originalDestination;
        console.log("Done, good job, i guess...");
    });
};

