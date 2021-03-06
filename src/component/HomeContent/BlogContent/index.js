import React from "react";
import {GlobalContent} from "../../GlobalContent";
import {BlogData} from "./content";
import { TitleHomeContent, Viewedin} from "../style";
import { BsFillCaretRightFill } from "react-icons/bs";
import {
    BlogBox,
    BlogContainer,
    BoxContainer,
    BlogImage,
    Blogbtn,
} from "./style"
import Train from "../../../images/Train.png";

const ManageBlogData = ({ title, description }) => {
    return (
      <BlogBox>
          <BlogImage src = {Train} />
          <BoxContainer titlee >{title}</BoxContainer>
          <BoxContainer>{description}</BoxContainer>
          <Blogbtn>Continue Reading</Blogbtn>
      </BlogBox>
    );
};

const BlogContent = () => {
    return(
        <GlobalContent>
            <TitleHomeContent recent>Recent Blog</TitleHomeContent>
            <TitleHomeContent view recent>
              <Viewedin to="/blog">View All <BsFillCaretRightFill target="_blank"/></Viewedin>
            </TitleHomeContent>
            <BlogContainer>
            {BlogData.map((data, idx) => (
              <ManageBlogData
                key={idx}
                title={data.title}
                description={data.description}
              />
            ))}
            </BlogContainer>
        </GlobalContent>
    );
};

export default BlogContent;