define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",
    "clippyjs"
], function (declare, _WidgetBase, clippy) {
    "use strict";
    clippy = clippy.default;

    return declare("clippy.widget.clippy", [ _WidgetBase ], {
        agent: "Clippy",
        postCreate: function () {
            clippy.load(this.agent, (agentLoaded) => {
                // do anything with the loaded agent
                window.__clippyAgent = agentLoaded;
            }, undefined, "./widgets/agents/");
        }
    });
});
