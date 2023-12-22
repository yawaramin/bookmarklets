## Bookmarklets - project to organize my bookmarklets

Copyright 2023 Yawar Amin

This file is part of dream-html.

bookmarklets is free software: you can redistribute it and/or modify it under
the terms of the GNU General Public License as published by the Free Software
Foundation, either version 3 of the License, or (at your option) any later
version.

dream-html is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with
dream-html. If not, see <https://www.gnu.org/licenses/>.

You can install them by bookmarking the following links.

## Paste enable

Some very annoying websites disable the paste functionality on some of their
inputs by hijacking the paste event. This re-enables paste functionality.

<a href="javascript:document.addEventListener('paste', e => e.stopImmediatePropagation(), true))">paste enable</a>

## Scroll bottom

Scroll to the bottom of the page.

<a href="javascript:window.scrollTo(0, document.body.scrollHeight)">scroll
bottom</a>

## Scroll top

Scroll to the top of the page.

<a href="javascript:window.scrollTo(0, 0)">scroll top</a>

## Sticky kill

Kill sticky elements that hide parts of the page beneath them.

See https://github.com/t-mart/kill-sticky

## URL decrement

Decrement the last number in the URL and navigate to the resulting page.

<a href="javascript:(() => { const results = /^([^\d.]*)(\d+)([/.][^/.]*)?$/.exec(window.location.pathname); if (results != null) { const suffix = results[3]; window.location.pathname = results[1] + (parseInt(results[2]) - 1) + (suffix == null ? '' : suffix); } })()">url decr</a>

## URL increment

Increment the last number in the URL and navigate to the resulting page.

<a href="javascript:(() => { const results = /^([^\d.]*)(\d+)([/.][^/.]*)?$/.exec(window.location.pathname); if (results != null) { const suffix = results[3]; window.location.pathname = results[1] + (parseInt(results[2]) + 1) + (suffix == null ? '' : suffix); } })()">url incr</a>

