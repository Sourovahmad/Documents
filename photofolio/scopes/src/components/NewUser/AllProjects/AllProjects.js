import { faEdit, faEye, faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './AllProjects.css';
import profile from '../../../images/NewUser/Profile.png.webp';
import project1 from '../../../images/NewUser/aa4.png';

const AllProjects = () => {
    const [createProject, setCreateProject] = useState(false);

    // handle create project
    const handleCreateProject = (value) => {
        value && setCreateProject(value);
    }
    
    return (
        <div id='allProject_area'>
            <div className="container">
                <div className='row'>
                    <div className='col-md-8'>
                        <div className='projectInner'>
                            <nav class="navbar navbar-expand-lg">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <button className='active btn'>Portfolio</button>
                                    </li>
                                    <li class="nav-item">
                                        <button className='btn'>Livestreams</button>
                                    </li>
                                    <li class="nav-item">
                                        <button className='btn'>Sub Sites</button>
                                    </li>
                                    <li class="nav-item">
                                        <button className='btn'>About Us</button>
                                    </li>
                                </ul>
                            </nav>

                            <div className='d-md-flex flex-md-wrap d-lg-flex flex-lg-wrap projectList'>
                                <div className='createProject' onClick={() => handleCreateProject(true)}>
                                    <div className='addIcon'>
                                        <FontAwesomeIcon icon={faPlusCircle} />
                                    </div>
                                    <button className='btn d-block'>Create a Project</button>
                                    <p>Get Feedback and show your Skills to everyone.</p>
                                </div>

                                <div className='projectDemo'>
                                    <img src={project1} className='img-fluid' />

                                    <div className='info d-flex justify-content-between'>
                                        <p>Project Title 12345</p>

                                        <div className='d-flex justify-content-between view'>
                                            <p><FontAwesomeIcon icon={faEdit} /> Edit</p>
                                            <p><FontAwesomeIcon icon={faEye} />View</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='emptyProject'>
                                </div>

                                <div className='emptyProject'>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='userProfile'>
                            <div className='profile'>
                                <img src={profile} class="img-fluid" alt="" />

                                <div className='pIcon'>
                                    <FontAwesomeIcon icon={faPlusCircle} />
                                </div>
                            </div>

                            <h5>Nicknameofphotographer</h5>
                            <p>Little description of the Photographer you know know</p>
                        
                            <button className='btn editProfile'><FontAwesomeIcon icon={faPlus} /> Edit Your Profile</button>
                        
                            <div className='followers'>
                                <div className='d-flex justify-content-between'><p>Followers</p> <p>1,223</p></div>
                                <div className='d-flex justify-content-between'><p>Project Views</p> <p>333</p></div>
                                <div className='d-flex justify-content-between'><p>Following</p> <p>11</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProjects;