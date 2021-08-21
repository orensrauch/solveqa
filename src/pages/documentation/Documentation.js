import React from "react";
import "./Documentation.css"


function Documentation() {
    return (
        <div className="main">
            <nav id="navbar">
                <header>SolveQA Overview</header>
                <ul>
                    <li>
                        <a class="nav-link" href="#Introduction">Introduction</a>
                    </li>
                    <li>
                        <a class="nav-link" href="#challenges">challenges</a>
                    </li>
                    <li>
                        <a class="nav-link" href="#Introduction">Introduction</a>
                    </li>


                </ul>
            </nav>
            <main id="main-doc">
                <section class="main-section" id="Introduction">
                    <header>Introduction</header>
                    <article>
                        <p>
                            Welcome to the Redux Fundamentals tutorial! This tutorial will introduce you to the core concepts, principles, and patterns for using Redux. By the time you finish, you should understand the different pieces that make up a Redux app, how data flows when using Redux, and our standard recommended patterns for building Redux apps.
                        </p>

                        <p>
                            In Part 1 of this tutorial, we'll briefly look at a minimal example of a working Redux app to see what the pieces are, and in Part 2: Redux Concepts and Data Flow we'll look at those pieces in more detail and how data flows in a Redux application.
                        </p>
                        <ul>
                            <li>
                                Starting in Part 3: State, Actions, and Reducers, we'll use that knowledge to build a small example app that demonstrates how these pieces fit together and talk about how Redux works in practice. After we finish building the working example app "by hand" so that you can see exactly what's happening, we'll talk about some of the standard patterns and abstractions typically used with Redux. Finally, we'll see how these lower-level examples translate into the higher-level patterns that we recommend for actual usage in real applications.
                            </li>
                            <li>
                                <strong>How to Read This Tutorial</strong>
                                <p>
                                    This tutorial will teach you "how Redux works", as well as why these patterns exist. Fair warning though - learning the concepts is different from putting them into practice in actual apps.

                                    The initial code will be less concise than the way we suggest writing real app code, but writing it out long-hand is the best way to learn. Once you understand how everything fits together, we'll look at using Redux Toolkit to simplify things. Redux Toolkit is the recommended way to build production apps with Redux, and is built on all of the concepts that we will look at throughout this tutorial. Once you understand the core concepts covered here, you'll understand how to use Redux Toolkit more efficiently.
                                </p>
                            </li>
                        </ul>
                    </article>
                </section>
                <section class="main-section" id="challenges">
                    <header>challenges</header>
                    <article>
                        <p>
                            Welcome to the Redux Fundamentals tutorial! This tutorial will introduce you to the core concepts, principles, and patterns for using Redux. By the time you finish, you should understand the different pieces that make up a Redux app, how data flows when using Redux, and our standard recommended patterns for building Redux apps.
                        </p>

                        <p>
                            In Part 1 of this tutorial, we'll briefly look at a minimal example of a working Redux app to see what the pieces are, and in Part 2: Redux Concepts and Data Flow we'll look at those pieces in more detail and how data flows in a Redux application.
                        </p>
                        <ul>
                            <li>
                                Starting in Part 3: State, Actions, and Reducers, we'll use that knowledge to build a small example app that demonstrates how these pieces fit together and talk about how Redux works in practice. After we finish building the working example app "by hand" so that you can see exactly what's happening, we'll talk about some of the standard patterns and abstractions typically used with Redux. Finally, we'll see how these lower-level examples translate into the higher-level patterns that we recommend for actual usage in real applications.
                            </li>
                            <li>
                                <strong>How to Read This Tutorial</strong>
                                <p>
                                    This tutorial will teach you "how Redux works", as well as why these patterns exist. Fair warning though - learning the concepts is different from putting them into practice in actual apps.

                                    The initial code will be less concise than the way we suggest writing real app code, but writing it out long-hand is the best way to learn. Once you understand how everything fits together, we'll look at using Redux Toolkit to simplify things. Redux Toolkit is the recommended way to build production apps with Redux, and is built on all of the concepts that we will look at throughout this tutorial. Once you understand the core concepts covered here, you'll understand how to use Redux Toolkit more efficiently.
                                </p>
                            </li>
                        </ul>
                    </article>
                </section>
            </main>
        </div>


    );
}

export default Documentation;