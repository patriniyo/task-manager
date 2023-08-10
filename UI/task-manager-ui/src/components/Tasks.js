import React, { useState } from "react";
import Header from "./Header";

const Tasks = () => {
  const [activeTab, setActiveTab] =
    useState("register");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Header />
      <main>
        <section style={{ margin: "auto" }}>
          <div className="tabs-holder">
            <ul className="tabs">
              <li className="tabs__li">
                <a
                  id="content1"
                  className={`tabs__a ${
                    activeTab === "register"
                      ? "clickedLink"
                      : ""
                  }`}
                  onClick={() =>
                    handleTabChange("register")
                  }
                >
                  CREATE TASKS
                </a>
              </li>
              <li className="tabs__li">
                <a
                  id="content2"
                  className={`tabs__a ${
                    activeTab === "manage"
                      ? "clickedLink"
                      : ""
                  }`}
                  onClick={() =>
                    handleTabChange("manage")
                  }
                >
                  MANAGE TASKS
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className={`content1 content ${
                  activeTab === "register"
                    ? "initial-content"
                    : ""
                }`}
              >
                <div className="create_task_box">
                  <label className="form__label">
                    Name
                  </label>
                  <input
                    className="form__input"
                    placeholder="Task name"
                    type="text"
                    name="task-name"
                  />
                  <div className="task_date_holder">
                    <div className="start_date_box_outer">
                      <div className="start_date_box_inner">
                        <label className="form__label">
                          Start date
                        </label>
                        <input
                          className="form__input"
                          type="date"
                          name="task-start-date"
                        />
                      </div>
                    </div>
                    <div className="end_date_box_outer">
                      <div className="end_date_box_inner">
                        <label className="form__label">
                          End date
                        </label>
                        <input
                          className="form__input"
                          type="date"
                          name="task-end-date"
                        />
                      </div>
                    </div>
                  </div>
                  <label className="form__label">
                    Projects
                  </label>
                  <div className="project_holder">
                    <div className="projectname_holder">
                      <input
                        className="form__input"
                        required
                        placeholder="Project Name"
                        type="text"
                        name="task-end-date"
                      />
                    </div>
                    <div className="add_button_holder">
                      <button className="button_tasks button--green">
                        Add Project
                      </button>
                    </div>
                  </div>
                  <label className="form__label">
                    Description
                  </label>
                  <textarea
                    className="form__input"
                    placeholder="Add more detail to tasks"
                    maxLength={200}
                    style={{ height: "100px" }}
                    name="task-description"
                  />
                  <label className="form__label">
                    Priority
                  </label>
                  <div className="priority_holder">
                    <label>
                      <input
                        type="radio"
                        name="priority"
                        value="low"
                      />
                      Low
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="priority"
                        value="normal"
                      />
                      Normal
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="priority"
                        value="high"
                      />
                      High
                    </label>
                  </div>
                  <div className="button_holder">
                    <div className="button_task_attach">
                   
                    </div>
                    <div className="button_task_submit">
                    <button className="button_tasks button--green">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`content2 content ${
                  activeTab === "manage"
                    ? "initial-content"
                    : ""
                }`}
              >
                <h1>Tab 2</h1>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Tasks;
