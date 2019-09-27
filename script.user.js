// ==UserScript==
// @name         Microsoft Teams Compact
// @namespace    MSTeamsCompact
// @version      0.32
// @updateURL    https://raw.githubusercontent.com/kulack/MSTeamsCompact/master/script.user.js
// @description  Making Microsoft Teams UI just a little more compact
// @author       fred@kulack.com
// @match        https://teams.microsoft.com/*
// @grant        GM_addStyle
// @license      GPL-3.0
// @homepageURL  https://github.com/kulack/MSTeamsCompact
// @source       https://github.com/kulack/MSTeamsCompact
// @supportURL   https://github.com/kulack/MSTeamsCompact/issues
// @run-at       document-start
// ==/UserScript==

GM_addStyle ( `
/* Base fonts sizes */
/* ====================================================== */
body .h1,body .h2,body .h3,body .h4,body .ts-large-font,body h1,body h2,body h3,body h4{
    font-size:1.5rem  !important;
}
body .h5,body .h6,body h5,body h6{
    font-size:1rem !important;
}
body .h1, body .h2, body .h3, body .h4, body .ts-large-font, body h1, body h2, body h3, body h4 {
  font-size: 1.5rem !important;
}
// Left nav bar for activity/teams/chats
.app-bar-width {
  width: 4rem !important;
}
.app-bar {
  width: 4rem !important;
}
.teams-app-bar {
  width: 4rem !important;
}
.app-bar-link {
  width: 4rem !important;
}
// 2nd from the left, the "teams" column
// condense the team names and icons
.app-rail-common {
    width: 12rem !important;
}
.ts-left-rail-wrapper {
    width: 12rem !important;
}
img.team-icon {
    width: 15px !important;
    height: 15px !important;
    margin-right: 1rem !important;
}
a.channel-anchor {
   padding-left: 20px !important;
}
// Icon columns in messages and chat
//.media-left {
//  max-width: 2rem !important;
//  width: 2rem !important;
//}

// Message content
.ts-reply-message {
  height: 1.5rem !important;
}
.message-pane {
  line-height: 1.2rem !important;
}


/*Team Title Bar */
/* ====================================================== */
.ts-title-bar .icons-patharrow {
  margin: 0 0 -.2rem -.2rem !important;
  max-height: 1rem !important;
  max-width: 1rem !important;
}
.ts-title-bar-team-header {
  padding: 0px !important;
  max-height: 1.5rem !important;
}
div.team-text-info {
  max-height: 1.5rem !important;
}
.ts-tab-bar-wrapper {
  margin: 0 !important;
}
.team-properties-container {
  max-height: 1.5rem !important;
}
more-options {
  max-height: 1.5rem !important;
}
button#settingsDropdown {
  padding: 0px !important;
}
button#settingsDropdown > svg.app-svg {
  height: 1.5rem !important;
  width: 1.5rem !important;
}
div.ts-title-bar-icon {
  height: 1.5rem !important;
  width: 1.5rem !important;
}

// Expander in messages near collapse all/show replies from a message and title bar 
.app-svg, .ts-svg {
  height: 2.2rem !important;
  width: 2.2rem !important;
}
//tabs
.ts-messages-header .ts-tab-bar-wrapper {
  margin-top: 1rem !important;
  height: 3.4rem !important;
}
.btn {
  display: inline-block;
  margin-bottom: 0 !important;
  font-weight: 400 !important;
  text-align: center !important;
  touch-action: manipulation !important;
  cursor: pointer !important;
  border: 1px solid transparent !important;
  white-space: nowrap !important;
    padding: 6px 3px !important;
  font-size: 1.5rem !important;
  line-height: 1.4286 !important;
  border-radius: .3rem !important;
  user-select: none !important;
}
.app-messages-header {
  padding: 0 3.2rem .5rem !important;
}


/* Chat Message Tweaks */
/* ====================================================== */
.ts-message-list-container{
    max-width:100% !important;
    width:100% !important;
}
.chat-style thread .ts-message{
    padding:0.5rem !important;
}
.app-font-base-regular,.app-font-base-semibold{
    font-size:1rem !important;
    line-height:1.1 !important;
}
virtual-repeat > .list-wrap > .item-wrap {
    max-width: 100% !important;
    width: 100% !important;
}
message-list.chat-style .thread-body:not(.self) .media-left ~ .ts-message-thread-body {
  margin-right: 1rem !important;
}
message-list.chat-style .self .media-left ~ .ts-message-thread-body {
  padding-left: 1rem !important;
}


/*Team Message Tweaks*/
/* ====================================================== */
.message-list-common:not(.chat-style) thread .ts-message {
  padding: .45rem .45rem .45rem 0 !important;
}
.ts-message-list-container .ts-message-list-item {
  padding-left: 0.45rem !important;
}

/* Github Enterprise Notification Cards */
/* ====================================================== */
.ts-o365-connector-card .o365-card-title {
  font-weight: normal !important;
  font-size: 1.4rem !important;
  line-height: 1.1 !important;
  margin: 0 !important;
}
.ts-o365-connector-card-section .o365-card-activity-container {
  display: flex !important;
  overflow: hidden;
  margin: 0 !important;
}
.ts-o365-connector-card-section .card-facts {
  margin: 0 !important;
}
.ts-o365-connector-card-section .card-facts .card-fact-key {
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  font-size: 1.2rem !important;
  line-height: 1 !important;
  font-weight: 600 !important;
  padding: 2px !important;
  max-width: 100% !important;
  vertical-align: top !important;
}
.ts-o365-connector-card-section .card-facts .card-fact-value {
  font-size: 1.2rem !important;
  line-height: 1 !important;
  padding: 0 !important;
  max-width: 100% !important;
  word-break: break-all !important;
}
.ts-o365-connector-card * + .card-actions-container .card-action, .ts-o365-connector-card * + o365-action-pane > .card-actions-container .card-action {
  overflow: visible !important;
  text-overflow: clip !important;
  white-space: normal !important;
  height: auto !important;
    max-width: none !important;
    min-width: none !important;
    font-size: 1.3rem !important;
  padding: 0.2rem !important;
  width: auto !important;
  margin: .4rem !important;
}
.ts-o365-connector-card-section .o365-card-activity-container .card-image-error.avatar {
  width: 4rem !important;
  height: 4rem !important;
}
.ts-o365-connector-card-section .o365-card-activity-title {
  font-size: 1.3rem !important;
  line-height: 1.1 !important;
  font-weight: 600 !important;
}
/////////////////////////////////////////////////////////////
// Completely strip avatar icon columns in messages and chat
div.media-left {
    display: none !important;
}
.message-list-common:not(.chat-style) thread .ts-message .conversation-start .media-left {
    display: none !important;
}
thread .ts-message .conversation-reply .media-left {
    display: none !important;
}
.message-list-common:not(.chat-style) thread .ts-message .conversation-reply .media-left {
    display: none !important;
}
span.status-icon {
    display: none !important;
}
// Leave only the smallest indent for threads and replies
// Note, I discovered this by accident, something is going on here that I don't
// quite understand. If I put div.media.thread-body twice here, the style is actually
// applied, otherwise, its not. Even updating comments in this file in 
// different places seems to cause it.
div.media.thread-body {
    margin-left: 1rem !important;
}
div.media.message-body {
    margin-left: 1rem !important;
}
div.thread-action-reply-message {
    padding-left: 1rem !important;
}
div.media.thread-body {
    margin-left: 1rem !important;
}
` );
