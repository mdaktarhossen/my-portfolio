"use client";
import { Button, Navbar } from "keep-react";
import { Image } from "phosphor-react";
import img from "../assets/react.svg";

export const NavbarComponent = () => {
  return (
    <Navbar fluid={true}>
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Brand>
          <Image src={img} alt="keep" width="100" height="40" />
        </Navbar.Brand>

        <Navbar.Collapse collapseType="sidebar">
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Navbar.Link linkName="Home" />
            <Navbar.Link linkName="Projects" />
            <Navbar.Link linkName="Blogs" />
            <Navbar.Link linkName="News" />
            <Navbar.Link linkName="Resources" />
          </Navbar.Container>
        </Navbar.Collapse>

        <Navbar.Container className="flex items-center gap-3">
          <Navbar.Container tag="ul" className="lg:flex hidden items-center justify-between gap-5">
            <Navbar.Link linkName="Home" />
            <Navbar.Link linkName="About" />
            <Navbar.Link linkName="Project" />
          </Navbar.Container>
          <Button size="sm">Contact</Button>

          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};
