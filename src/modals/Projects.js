import { Grid } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import mse_project from "../text_blobs/mse_project";
import hackDartmouth from '../images/experience/hackdartmouth.png'
import lil_lexie_project from "../text_blobs/lil_lexie_project";
import hundredp from '../images/experience/100p.png';
import ctr from '../images/experience/crash_team_racing_minecraft_mod.jpeg';
import ctr_decompile from '../images/experience/ctr_decompile.webp';
import resume_ai from '../images/experience/resume_ai.png';
import smart_apply from '../images/experience/smart_apply.png';
import rnn from '../images/experience/rnn.jpeg';
import mnist from '../images/experience/mnist.webp';

export default function Projects(props){
    return(
        <>
            <Grid container direction={'column'} justifyContent={"space-between"} alignItems={"center"} sx={{marginTop: 8}}>
                <Grid item>
                    <Grid item>
                        <ProjectCard 
                        title={'"Lil\' Lexie"'}
                        src={hackDartmouth}>
                            {lil_lexie_project}
                        </ProjectCard>
                    </Grid>
                    <ProjectCard 
                    title={"Minecraft Social Experiments"}
                    src={hundredp}>
                        {mse_project}
                        <div>
                        <br></br>
                        By pulling from the YouTube and Discord APIs, I am able to calculate 
                        the total member count of my community, which is currently
                        <span> </span>
                        <span style={{fontFamily: 'Courier', color: 'red', backgroundColor: '#292929', padding: 2, paddingLeft: 12, paddingRight: 12, borderRadius: 4}}>
                            21,507
                        </span>
                        .
                    </div>
                    </ProjectCard>

                    <Grid item>
                        <ProjectCard 
                        title={'Automated Resume Analysis & Job Recommendation Engine'}
                        src={resume_ai}>
                            While at LivePerson, I was tasked to create a resume scraping AI tool
                            to intelligently read and process resumes from potential candidates.
                            Then, using the information scraped from their resume, recommend them
                            open jobs from our career site that they might be interested in.
                            
                        </ProjectCard>
                    </Grid>

                    <Grid item>
                        <ProjectCard 
                        title={'Modern Careers Site'}
                        src={smart_apply}>
                            While at LivePerson, I was tasked with modernizing their outdated careers page.
                            Using React & React Redux, my team and I programmed a mobile-first website that also
                            included Google Analytics.
                            
                        </ProjectCard>
                    </Grid>

                    <Grid item>
                        <ProjectCard 
                        title={'AI-Generated Game of Thrones Chapter using Recurrent Neural Network'}
                        src={rnn}>
                            In 2019, I programmed an AI model using something called
                            a recurrent neural network using Google's Tensorflow ML library. 
                            At the time, LSTMs and transformers
                            did not exist yet, so RNNs were the king of predictive text modeling.
                            The chapter it generated was surprisingly good. You can find a link to the chapter
                            <a href="https://docs.google.com/document/d/1gaCt4jYrbTDAKx2KsVQ2TO1tT4aKmaodHzC8daa-DOI/edit?usp=sharing"
                            style={{color: 'white', marginLeft: 5}}>here.</a>
                        </ProjectCard>
                    </Grid>

                    <Grid item>
                        <ProjectCard 
                        title={'GrowingGAN Implementation on NMIST Dataset'}
                        src={mnist}>
                            As part of my work as a Research Assistant under
                            Professor Matthew Wright at RIT, I implemented nVidia's
                            GrowingGAN model, and used it on
                            the popular NMIST dataset successfully. You can read 
                            nVidia's excerpt on their GrowingGAN publication
                            <a style={{color: 'white', marginLeft: 5}} href="https://research.nvidia.com/publication/2018-04_progressive-growing-gans-improved-quality-stability-and-variation">
                                here.
                            </a>
                        </ProjectCard>
                    </Grid>


                    <Grid item>
                        <ProjectCard 
                        title={'Crash: Team Racing Decompiled'}
                        src={ctr_decompile}>
                            The CTR Decompiled project 
                            started right at the start of the pandemic, and has
                            managed to document and decompile 90% of the original base game's C source code.
                        </ProjectCard>
                    </Grid>

                    
                    <Grid item>
                        <ProjectCard 
                        title={'Crash: Team Racing Minecraft Mod'}
                        src={ctr}>
                            Currently under development is a Minecraft mod that I 
                            am making with an additional programmer from the CTR Decompile team.
                            We are trying to simulate the physics and engine to an identical
                            level of the original title. 
                            Much of our time is spent translating the original C code to Java, and
                            patching it so it functions in the Minecraft Fabric API.
                        </ProjectCard>
                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}