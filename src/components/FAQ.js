import React, {useState} from 'react';
import './FAQStyle.css'
import {Link} from "react-router-dom";
import {RiCheckLine, RiDeleteBin7Fill, RiDeleteBin7Line} from "react-icons/ri";
import {RxDoubleArrowRight} from "react-icons/rx";
import {AiFillCheckSquare} from "react-icons/ai";
import {FaFont} from "react-icons/fa";

function FAQ() {
    const data = [
        {
            question: "What exactly is flow?",
            answer: "You can think of flow as an all-in-one, productivity web app " +
                "that allows you to manage your personal life via its flexible tools. " +
                "Whether you are currently studying or working, flow is here to take " +
                "your productivity to the next level. With a variety of features, " +
                "such as creating to-do lists, managing money, taking notes etc., " +
                "you can organize information and keep track of everything that " +
                "goes on in your life. Have a lot of things in mind? Don't worry, we've got you!"
        },
        {
            question: "How to add an item to my to-do list?",
            answer: <ol>
                        <li>1.  On the navigation bar, which is located at the top of every page, go to "<Link to="/daily" className="lnk">DAILY GOALS</Link>".</li>
                        <li>2.	At the left white frame with the title "To-do List" write your to-do in the text area with the placeholder "Write something here".</li>
                        <li>3.	Click on <button type="submit" className="faqs-btn">ADD</button> to add the item to your to-do list.</li>
                     </ol>
        },
        {
            question: "How to remove-delete an item from my to-do list?",
            answer: <ol>
                        <li>1.	On the navigation bar, which is located at the top of every page, go to "<Link to="/daily" className="lnk">DAILY GOALS</Link>".</li>
                        <li>2.	At the left white frame with the title "To-do List" click on the bin icon (<RiDeleteBin7Fill className="todo-icon" style={{ color : "white" }}/>) at the right of the item that you want to remove.</li>
                        <li>3.	Click on the <button type="submit" className="faqs-btn">YES</button> option in the pop-up window that will appear.
                            In case you changed your mind click on the <button type="submit" className="faqs-btn">CANCEL</button> option.</li>
                    </ol>
        },
        {
            question: "How to mark an item from my to-do list as done?",
            answer: <ol>
                        <li>1.	On the navigation bar, which is located at the top of every page, go to "<Link to="/daily" className="lnk">DAILY GOALS</Link>".</li>
                        <li>2.	At the left white frame with the title "To-do List" click on the check icon (<AiFillCheckSquare className="todo-icon" style={{color : "white"}}/>) at the right of the item that you want to remove.</li>
                        <li>3.	The line that will appear above your to-do item indicates that it is marked as done.</li>
                    </ol>
        },
        {
            question: "How to add an expense to flow's budget manager?",
            answer: <ol>
                        <li>1.	On the navigation bar, which is located at the top of every page, go to "<Link to="/life" className="lnk">BUDGET MANAGER</Link>".</li>
                        <li>2.	Go to the white frame with the title "ADD EXPENSE".</li>
                        <li>3.	Write the expense's name in the text area with the placeholder "Expense name".</li>
                        <li>4.	Write the expense's numeric cost in the text area with the placeholder "Expense name".</li>
                        <li>5.	Click on <button type="submit" className="faqs-btn">ADD</button>, to add the expense.</li>
                    </ol>
        },
        {
            question: "How to remove-delete an expense from flow's budget manager?",
            answer: <ol>
                        <li>1.	On the navigation bar, which is located at the top of every page, go to "<Link to="/life" className="lnk">BUDGET MANAGER</Link>".</li>
                        <li>2.	Go to the white frame with the title "EXPENSES".</li>
                        <li>3.	Click on the bin icon (<RiDeleteBin7Fill className="todo-icon" style={{ color : "white" }}/>) at the right of the expense that you want to remove.</li>
                        <li>4.	Click on the <button type="submit" className="faqs-btn">YES</button> option in the pop-up window that will appear.
                            In case you changed your mind click on the <button type="submit" className="faqs-btn">CANCEL</button> option.</li>
                    </ol>
        },
        {
            question: "How to take a note?",
            answer: <ol>
                        <li>1.	On the navigation bar, which is located at the top of every page, go to "<Link to="/notes" className="lnk">NOTES</Link>".</li>
                        <li>2.	Go to the bottom-right white frame that contains the text area with the placeholder "Type to add new note...".</li>
                        <li>3.	Write down your note inside the text area.</li>
                        <li>4.	Click on <button type="submit" className="faqs-btn">+</button>, to save your note.</li>
                    </ol>
        },
        {
            question: "How to remove-delete a note from my notes?",
            answer: <ol>
                        <li>1.	On the navigation bar, which is located above every page, go to "<Link to="/notes" className="lnk">NOTES</Link>".</li>
                        <li>2.	Click on the bin icon (<RiDeleteBin7Fill className="todo-icon" style={{ color : "white" }}/>) at the at the bottom, right of the note that you want to remove.</li>
                        <li>3.	Click on the <button type="submit" className="faqs-btn">YES</button> option in the pop-up window that will appear.
                            In case you changed your mind click on the <button type="submit" className="faqs-btn">CANCEL</button> option.</li>
                    </ol>
        },
        {
            question: "How to change the font family of my notes?",
            answer: <ol>
                <li>1.	On the navigation bar, which is located located above every page, go to "<Link to="/notes" className="lnk">NOTES</Link>".</li>
                <li>2.	Click on the button above the notes section with the indication  <FaFont  size={15} style={{color: '#fff'}}/>  and a pop up window will appear.</li>
                <li>3.	Select the font family that you want to apply to your notes from the dropdown menu.</li>
                <li>3.	Click on  <button type="submit" className="faqs-btn">SAVE</button> in order to apply the font family.
                    In case you changed your mind click on the  <button type="submit" className="faqs-btn">CANCEL</button> option.</li>
            </ol>
        },

    ];

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    }

        return (
        <div className="faqs">
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <div className="wrapper">
                <div className="accordion">
                    <div className="header-faq">
                        <h1> Didn't find what you were looking for? </h1>
                        <p>Check our FAQs.</p>
                        <br/>
                    </div>
                    <br/>
                    {data.map((item, i) => (
                        <div className="item">
                            <div className="title" onClick={() => toggle(i)}>
                                <h2>{item.question}</h2>
                                <span>{selected === i ? "▲" : "▼"}</span>
                            </div>
                            <div className={selected === i ? "contnt show" : "contnt"}>{item.answer}</div>
                        </div>
                    ))}

                </div>
            </div>
            <div className="about">
                <div className="inside-about">
                    <div className="info1">
                        <h2><RxDoubleArrowRight size={20} style={{color: '#fff', marginRight: '1rem'}}/> WHAT IS FLOW?</h2><br/>
                        <p>
                            Flow is an online application developed in React JS as part of my bachelor thesis
                            titled "Gendered UI/UX: A Comparative Study of Gender-Specific and Gender-Neutral
                            Web Design". As a productivity tool, flow is designed to help users streamline
                            their daily routines and accomplish more in less time. The application includes
                            features such as task and budget management, calendar integration, and note-taking,
                            all of which are accessible through a user-friendly interface. For its implementation,
                            I employed technologies such as React Hooks and FP Paradigm (Functional Programming),
                            and utilized libraries like Material UI and SweetAlert2.
                        </p>
                    </div>
                    <div className="info2">
                        <h2><RxDoubleArrowRight size={20} style={{color: '#fff', marginRight: '1rem'}}/> BACHELOR THESIS</h2><br/>
                        <p>
                            My bachelor thesis, entitled as "Gendered UI/UX: A Comparative Study of Gender-Specific
                            and Gender-Neutral Web Design" is a research project that explores the impact of gender
                            on UI/UX design. In particular, the study aims to compare gender-specific and gender-neutral
                            web design and determine whether there are significant differences in how users interact with
                            these different types of design. By conducting this comparative analysis, the research seeks
                            to gain insights into how gender affects the user experience of web design and identify
                            strategies for creating more inclusive and effective UI/UX design.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default FAQ;