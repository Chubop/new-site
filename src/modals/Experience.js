import { Grid } from "@mui/material";
import ExperienceCard from "../components/ExperienceCard";
import caiei_experience from "../text_blobs/caiei_experience";
import college_experience from "../text_blobs/college_experience";
import csec_experience from "../text_blobs/csec_experience";
import sdei_experience from "../text_blobs/sdei_experience";
// import ExampleCard from "../components/experience/ExampleCard";



export default function Experience(){
    return(
        <>
            <Grid container direction={'column'} justifyContent={"space-between"} alignItems={"center"} 
            sx={{marginTop: 8, height: 'inherit', overflowY: 'scroll'}}>
                <Grid item>
                    <ExperienceCard
                    title={"Software Engineer I"}
                    setting={"LivePerson"}
                    timeframe={"February 2021"}
                    keywords={["Front End", "Back End", "Full Stack", "React", "GCP", "Python", "Web Dev", "AI", "NLP"]}
                    description={sdei_experience}>                    
                    </ExperienceCard>
                </Grid>
                <Grid item>
                    <ExperienceCard
                    title={"Conversational AI Engineer Intern"}
                    setting={"LivePerson"}
                    timeframe={"July 2020 - January 2021"}
                    keywords={["Front End", "React", "Python", "Web Dev", "AI", "NLP"]}
                    description={caiei_experience}>
                    </ExperienceCard>
                </Grid>
                <Grid item>
                    <ExperienceCard
                    title={"Cybersecurity & AI Research Assistant"}
                    setting={"Rochester Institute of Technology Center for Cybersecurity"}
                    timeframe={"October 2019 - March 2020"}
                    keywords={["Cybersecurity", "Back End", "Tensorflow", "Python", "AI"]}
                    description={csec_experience}>                    
                    </ExperienceCard>
                </Grid>
                <Grid item>
                    <ExperienceCard
                    title={"Board Member, Publicist"}
                    setting={"RIT AI Club"}
                    timeframe={"2018 - 2020"}
                    keywords={['Computer Science', "AI", "Public Speaking", "Presentations"]}
                    description={"As the Publicist and Board Member of RIT's AI Club, I would make regular presentations to fellow students explaining complicated AI topics in a careful and simple way, to make AI more digestible for younger or less experienced students. Alongside the founding members, I aided in bringing the AI Club out of its infancy."}>                    
                        {/* <ExampleCard/> */}
                    </ExperienceCard>
                </Grid>
                <Grid item>
                    <ExperienceCard
                    title={"Bachelor's of Science"}
                    setting={"Rochester Institute of Technology"}
                    timeframe={"2017 - 2021"}
                    keywords={['Computer Science']}
                    description={college_experience}>                    
                    </ExperienceCard>
                </Grid>
            </Grid>
        </>
    )
};