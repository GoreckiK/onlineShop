import React, { ReactNode } from "react";
import { PageHeader } from "antd";
import { Link } from "react-router-dom";
import "../styles/WrapperComponent.scss";
import Search from "antd/lib/input/Search";

const WrapperComponent = ({ children }: WrapperProps) => {
    return (
        <React.Fragment>
            <HeaderComponent />
            <div className="content">{children}</div>
        </React.Fragment>
    );
};

export default WrapperComponent;

const HeaderComponent = () => {
    return (
        <PageHeader className="site-page-header" title="">
            <Search
                placeholder="szukaj"
                onSearch={(val) => console.log(val)}
            ></Search>
            <div>LOGO</div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </PageHeader>
    );
};

interface WrapperProps {
    children: ReactNode;
}
