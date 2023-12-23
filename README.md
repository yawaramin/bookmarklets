## Bookmarklets - project to organize my bookmarklets

Copyright 2023 Yawar Amin

This file is part of dream-html.

bookmarklets is free software: you can redistribute it and/or modify it under
the terms of the GNU General Public License as published by the Free Software
Foundation, either version 3 of the License, or (at your option) any later
version.

bookmarklets is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with
bookmarklets. If not, see <https://www.gnu.org/licenses/>.

**To install** each bookmarklet, create a bookmark as follows:

- Name: (any name you want)
- URL: (the contents of the bookmarklet file)

## BitBucket Comments Minimize

In BitBucket PRs, some workflows (or long-winded reviews) can pile up a lot of
comments. Unfortunately, you have to scroll past all the comments to get to the
diff. It's much easier to do that if all the comments are automatically
collapsed and can be expanded with a click. This collapses (minimizes) the PR
comments.

## BitBucket merge

In BitBucket PRs, when you have the 'squash merge' feature enabled (which you
really should), the default commit message is formatted really badly:

    Merged in your-branch (pull request #nnn)

    Real first line

    Other lines

So when you do `git log`, the one-line summary logs are full of inscrutable
'Merged in...' messages which don't describe the actual commits themselves. This
is a long-standing issue known to BitBucket:
https://jira.atlassian.com/browse/BSERV-10184

This bookmarklet fixes the message to look like this:

    Real first line (PR #nnn)

    Other lines

Then it copies the fixed text to the clipboard and asks you to paste it into the
commit message textbox. Unfortunately this extra step seems unavoidable because
of the way the BitBucket textbox is designed. But it works fairly well. To use
it, you click on the bookmarklet instead of clicking on the PR's 'Merge' button.
Then you do a paste operation, and click the dialog box's 'Merge' button.

## Paste enable

Some very annoying websites disable the paste functionality on some of their
inputs by hijacking the paste event. This re-enables paste functionality.

## Scroll bottom

Scroll to the bottom of the page.

## Scroll top

Scroll to the top of the page.

## Sticky kill

Kill sticky elements that hide parts of the page beneath them.

See https://github.com/t-mart/kill-sticky

## URL decrement

Decrement the last number in the URL and navigate to the resulting page.

## URL increment

Increment the last number in the URL and navigate to the resulting page.

