# **Giving a Helping Hand:** Contributing to AlgoSavvy
**Leaving your mark on the AlgoSavvy project**

All types of contributions to AlgoSavvy are encouraged and valued. Keep reading to see different ways to help and details about how this project handles them. Please make sure to read the relevant section before making your contribution. It will make it a lot easier for maintainers and smooth out the experience for all involved. The community looks forward to your contributions. 🎉

> And if you like the project, but just don't have time to contribute, that's fine. There are other easy ways to support the project and show your appreciation, which we would also be very happy about:
> - Star the project
> - Tweet about it
> - Refer this project in your project's readme
> - Mention the project at local meetups and tell your friends/colleagues


## Code of Conduct

This project and everyone participating in it is governed by this project's
[Code of Conduct](https://github.com/shiloholotu/algosavvyblob/master/CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code. Please report unacceptable behavior
to .


## I Have a Question

Before you ask a question, it is best to search for existing [Issues](https://github.com/shiloholotu/algosavvy/issues) that might help you. In case you have found a suitable issue and still need clarification, you can write your question in this issue. It is also advisable to search the internet for answers first.

If you then still feel the need to ask a question and need clarification, we recommend the following:

- Open an [Issue](https://github.com/shiloholotu/algosavvy/issues/new).
- Provide as much context as you can about what you're running into.
- Provide project and platform versions (nodejs, npm, etc), depending on what seems relevant.

We will then take care of the issue as soon as possible.

<!--
You might want to create a separate issue tag for questions and include it in this description. People should then tag their issues accordingly.

Depending on how large the project is, you may want to outsource the questioning, e.g. to Stack Overflow or Gitter. You may add additional contact and information possibilities:
- IRC
- Slack
- Gitter
- Stack Overflow tag
- Blog
- FAQ
- Roadmap
- E-Mail List
- Forum
-->

## I Want To Contribute

To contribute, take the following steps:

- Go to the file that you want to change and click the pencil icon next to the article title.
- Fork the repository if requested.
- Modify the file.
- Use the preview page to check if you are satisfied with the result.
- Make a commit by clicking the Propose changes button.
- Create a pull-request by clicking the Compare & pull request button.

### Contributing to Tutorials
All tutorials are written in [Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) and their files can be found [here](https://github.com/shiloholotu/algosavvy/tree/main/tutorial-markdown). After adding, deleting, or modifying a tutorial, you must next update your changes in the [list-of-docs.js](https://github.com/shiloholotu/algosavvy/blob/main/scripts/tutorial-scripts/list-of-docs.js) file, which includes the names of each tutorial file, their titles, and when they were last updated. This file is what is used to render the table of contents page.

### Contributing to Problems
All problems are written in [Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) and their files can be found [here](https://github.com/shiloholotu/algosavvy/tree/main/problem-markdown). After adding, deleting, or modifying a tutorial, you must next update your changes in the [list-of-problems.js](https://github.com/shiloholotu/algosavvy/blob/main/scripts/problemset-scripts/list-of-docs.js) file, which includes the names of each tutorial file, their titles, and when they were last updated. This file is what is used to render the table of contents page.

Aside from snippets, all problems files are written in the following format:
```md
**Problem Statement**
[BREAK]
**Solution**
[BREAK]
**Method/algorithm used**
[BREAK]
**Time complexity**
```
This format allows for the problems to be broken down and manipulated in the game modes.

For snippet files, this format is used:
~~~md
```[cpp or java]
code here
```
~~~




### Reporting Bugs
If you believe you have found a bug, you may report it in an [Issue](https://github.com/shiloholotu/algosavvy/issues/new). However, it is important that you investigate carefully, collect information and describe the issue in detail in your report. Please complete the following steps in advance to help us fix any potential bug as fast as possible.

- Make sure that you are using the latest version.
- Determine if your bug is really a bug and not an error on your side. If you are looking for support, you might want to check [this section](#i-have-a-question).
- To see if other users have experienced (and potentially already solved) the same issue you are having, check if there is not already a bug report existing for your bug or error in the [bug tracker](https://github.com/shiloholotu/algosavvyissues?q=label%3Abug).
- Also make sure to search the internet (including Stack Overflow) to see if users outside of the GitHub community have discussed the issue.
- Take note of the steps it takes to reliably reproduce the issue.
- Take note of your browser and OS.

If you feel the bug contains sensitive information or security vulnerabilities, you should report them to [shiloholotu@gmail.com](mailto:shiloholotu@gmail.com), instead of reporting them on GitHub.


When the project team sees your report, it will be given either the `needs-repro` tag or the `needs-fix` tag.
- If your issue is given the `needs-repro` tag, this means that the project team failed to reproduce the bug with the given reproduction steps and they should be improved.

- If your issue is given the `needs-fix` tag, this the project team successfully reproduced the issue and is ready to be worked on. **Everyone, including you, is encouraged to contribute bug fixes if you're confident you have a solution👍.**


### Legal Notice
When contributing to this project, you must agree that you have authored 100% of the content, that you have the necessary rights to the content and that the content you contribute may be provided under the project license.

### Commit Messages
We recommend using the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format when writing commit messages.

## Attribution
This guide is based on the **contributing-gen**. [Make your own](https://github.com/bttger/contributing-gen)!