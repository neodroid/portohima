import React from "react";
import {GlobalContent} from "../../GlobalContent";
import {BlogData} from "./content";
import {TitleHomeContent} from "../style";
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
          <BoxContainer title>{title}</BoxContainer>
          <BoxContainer>{description}</BoxContainer>
          <Blogbtn>Continue Reading</Blogbtn>
      </BlogBox>
    );
};

const BlogContent = () => {
    return(
        <GlobalContent>
            <TitleHomeContent>Recent Blog</TitleHomeContent>
            <BlogContainer>
            {BlogData.map((data, idx) => (
              <ManageBlogData
                key={idx}
                title={data.title}
                description={data.description}
              />
            ))};
            </BlogContainer>
        </GlobalContent>
    );
};

export default BlogContent;