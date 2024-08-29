/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React from 'react';
import LinkComponent from './LinkComponent';
import IdeaPage1 from '../../assets/img/idea report/idea_page1.png';
import IdeaPage2 from '../../assets/img/idea report/idea_page2.jpg';
import IdeaPage3 from '../../assets/img/idea report/idea_page3.jpg';
import moment from 'moment';
import { Card, CardBody } from 'reactstrap';
import { CardText } from 'reactstrap';
// const detailToDownload = (props) => {
class detailToDownload extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid bg-white">
                <div className="row">
                    <div style={{ position: 'relative', padding: '0' }}>
                        <span
                            className="text-capitalize"
                            style={{
                                position: 'absolute',
                                top: '27rem',
                                left: '17rem',
                                fontSize: '1rem',
                                fontFamily: 'Poppins'
                            }}
                        >
                            {this.props?.ideaDetails?.organization_code}
                        </span>
                        <span
                            className="text-capitalize"
                            style={{
                                position: 'absolute',
                                top: '29rem',
                                left: '19rem',
                                fontSize: '1rem',
                                fontFamily: 'Poppins'
                            }}
                        >
                            {this.props?.ideaDetails?.organization_name}
                        </span>
                        <span
                            className="text-capitalize"
                            style={{
                                position: 'absolute',
                                top: '31rem',
                                left: '15rem',
                                fontSize: '1rem',
                                fontFamily: 'Poppins'
                            }}
                        >
                            {this.props?.ideaDetails?.state}
                        </span>
                        <span
                            className="text-capitalize"
                            style={{
                                position: 'absolute',
                                top: '33rem',
                                left: '17rem',
                                fontSize: '1rem',
                                fontFamily: 'Poppins'
                            }}
                        >
                            {this.props?.ideaDetails?.category}
                        </span>
                        <span
                            className="text-capitalize"
                            style={{
                                position: 'absolute',
                                top: '41.2rem',
                                left: '16rem',
                                fontSize: '1rem',
                                fontFamily: 'Poppins'
                            }}
                        >
                            {this.props?.ideaDetails?.mentor_name}
                        </span>
                        <span
                            className="text-capitalize"
                            style={{
                                position: 'absolute',
                                top: '43.2rem',
                                left: '22rem',
                                fontSize: '1rem',
                                fontFamily: 'Poppins'
                            }}
                        >
                            {this.props?.ideaDetails?.team_username}
                        </span>
                        <span
                            className="text-capitalize"
                            style={{
                                position: 'absolute',
                                top: '45.3rem',
                                left: '19rem',
                                fontSize: '1rem',
                                fontFamily: 'Poppins'
                            }}
                        >
                            {this.props?.ideaDetails?.team_name}
                        </span>
                        <span
                            className="text-capitalize"
                            style={{
                                position: 'absolute',
                                top: '47.2rem',
                                left: '21rem',
                                fontSize: '1rem',
                                fontFamily: 'Poppins',
                                overflowWrap: 'anywhere',
                                width: '60%'
                            }}
                        >
                            {this.props?.ideaDetails?.team_members &&
                                this.props?.ideaDetails?.team_members.toString()}
                        </span>
                        <span
                            style={{
                                position: 'absolute',
                                top: '58.8rem',
                                left: '16rem',
                                fontSize: '1rem',
                                fontFamily: 'Poppins',
                                fontWeight: 'bold'
                            }}
                        >
                            {this.props?.ideaDetails?.challenge_responce_id}
                        </span>
                        <span
                            style={{
                                position: 'absolute',
                                top: '60.8rem',
                                left: '17rem',
                                fontSize: '1rem',
                                fontFamily: 'Poppins',
                                overflowWrap: 'anywhere',
                                width: '65%'
                            }}
                        >
                            {this.props?.ideaDetails?.title}
                        </span>

                        <img
                            src={IdeaPage1}
                            alt="IdeaPage1"
                            style={{
                                height: '83rem',
                                width: '100%'
                            }}
                        />
                    </div>
                    <div style={{ position: 'relative', padding: '0' }}>
                        <img
                            src={IdeaPage2}
                            alt="IdeaPage2"
                            style={{
                                width: '100%'
                            }}
                        />
                        <span
                            className="text-capitalize"
                            style={{
                                position: 'absolute',
                                top: '8rem',
                                left: '5rem',
                                fontSize: '1rem',
                                fontFamily: 'poppins'
                            }}
                        >
                            <span
                                style={{
                                    fontWeight: 'bold',
                                    padding: '0.5rem',
                                    backgroundColor: '#FFBB3F',
                                    borderRadius: '5px'
                                }}
                            >
                                Submitted by :
                            </span>{' '}
                            {this.props?.ideaDetails?.initiated_name}
                        </span>
                        <span
                            className="text-capitalize"
                            style={{
                                position: 'absolute',
                                top: '8rem',
                                left: '33rem',
                                fontSize: '1rem',
                                fontFamily: 'poppins'
                            }}
                        >
                            <span
                                style={{
                                    fontWeight: 'bold',
                                    padding: '0.5rem',
                                    backgroundColor: '#FFBB3F',
                                    borderRadius: '5px'
                                }}
                            >
                                Submitted on :
                            </span>{' '}
                            {moment(
                                this.props?.ideaDetails?.submitted_at
                            ).format('DD-MM-YYYY')}
                        </span>
                    </div>

                    {/* ----------------------------------------- */}
                    {/* -------------questions answers---- */}
                    <div className="col-12">
                        <div style={{ borderStyle: 'solid', margin: '0 2rem' }}>
                            <Card className="p-1">
                                <CardBody>
                                    <label
                                        htmlFor="teams"
                                        className=""
                                        style={{ fontSize: '1rem', fontWeight: 'bold' }}
                                    >
                                        1. Focus Area
                                    </label>
                                    <CardText>
                                        {this.props?.ideaDetails?.focus_area}
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card className="p-1">
                                <CardBody>
                                    <label
                                        htmlFor="teams"
                                        className=""
                                        style={{ fontSize: '1rem', fontWeight: 'bold' }}
                                    >
                                        {`2. Title of your idea (Think of a proper name. Don't describe the solution or problem statement here.)`}
                                    </label>
                                    <CardText>
                                        {this.props?.ideaDetails?.title}
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card className="p-1">
                                <CardBody>
                                    <label
                                        htmlFor="teams"
                                        className=""
                                        style={{ fontSize: '1rem', fontWeight: 'bold' }}
                                    >
                                        3. Write down your Problem statement
                                    </label>
                                    <CardText>
                                        {
                                            this.props?.ideaDetails?.problem_statement
                                        }
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card className="p-1">
                                <CardBody>
                                    <label
                                        htmlFor="teams"
                                        className=""
                                        style={{ fontSize: '1rem', fontWeight: 'bold' }}
                                    >
                                        4. List the Causes of the problem
                                    </label>
                                    <CardText>
                                        {
                                            this.props?.ideaDetails?.causes

                                        }
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card className="p-1">
                                <CardBody>
                                    <label
                                        htmlFor="teams"
                                        className=""
                                        style={{ fontSize: '1rem', fontWeight: 'bold' }}
                                    >
                                        5. List the Effects of the problem
                                    </label>
                                    <CardText>{this.props?.ideaDetails?.
                                        effects
                                    }</CardText>
                                </CardBody>
                            </Card>
                            <Card className="p-1">
                                <CardBody>
                                    <label
                                        htmlFor="teams"
                                        className=""
                                        style={{ fontSize: '1rem', fontWeight: 'bold' }}
                                    >
                                        6. In which places in your community did you find this problem?
                                    </label>
                                    <CardText>
                                        {this.props?.ideaDetails?.community}
                                    </CardText>
                                </CardBody>
                            </Card>{' '}
                            <Card className="p-1">
                                <CardBody>
                                    <label
                                        htmlFor="teams"
                                        className=""
                                        style={{ fontSize: '1rem', fontWeight: 'bold' }}
                                    >
                                        7. Who all are facing this problem?
                                    </label>
                                    <CardText>
                                        {this.props?.ideaDetails?.facing}
                                    </CardText>
                                </CardBody>
                            </Card>{' '}
                            <Card className="p-1">
                                <CardBody>
                                    <label
                                        htmlFor="teams"
                                        className=""
                                        style={{ fontSize: '1rem', fontWeight: 'bold' }}
                                    >
                                        8. Describe the solution to the problem your team found. Explain your solution clearly - how does it work, who is it helping, and how will it solve the problem.
                                    </label>
                                    <CardText>
                                        {this.props?.ideaDetails?.solution}
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card className="p-1">
                                <CardBody>
                                    <label
                                        htmlFor="teams"
                                        className=""
                                        style={{ fontSize: '1rem', fontWeight: 'bold' }}
                                    >
                                        9. Apart from your teacher, how many people/stakeholders did you speak to to understand or improve your problem or solution?
                                    </label>
                                    <CardText>
                                        {this.props?.ideaDetails?.stakeholders}
                                    </CardText>
                                </CardBody>
                            </Card>  <Card className="p-1">
                                <CardBody>
                                    <label
                                        htmlFor="teams"
                                        className=""
                                        style={{ fontSize: '1rem', fontWeight: 'bold' }}
                                    >
                                        10. Pick the actions your team did in your problem solving journey (You can choose multiple options)
                                    </label>
                                    <CardText>
                                        {/* {this.props?.ideaDetails?.problem_solving} */}
                                        {this.props?.ideaDetails && JSON.parse(this.props?.ideaDetails?.problem_solving)}
                                    </CardText>
                                </CardBody>
                            </Card>  <Card className="p-1">
                                <CardBody>
                                    <label
                                        htmlFor="teams"
                                        className=""
                                        style={{ fontSize: '1rem', fontWeight: 'bold' }}
                                    >
                                        11. Mention the feedback that your team got and the changes you have made, if any, to your problem or solution.
                                    </label>
                                    <CardText>
                                        {this.props?.ideaDetails?.feedback}
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card className="p-1">
                                <CardBody>
                                    <label
                                        htmlFor="teams"
                                        className=""
                                        style={{ fontSize: '1rem', fontWeight: 'bold' }}
                                    >
                                        12.  Upload image of your prototype.  (total size limit : 10mb)
                                    </label>

                                    <CardText>
                                        <LinkComponent
                                            item={
                                                this.props?.ideaDetails && 
                                                JSON.parse(this.props?.ideaDetails?.prototype_image)
                                            }
                                        />
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card className="p-1">
                                <CardBody>
                                    <label
                                        htmlFor="teams"
                                        className=""
                                        style={{ fontSize: '1rem', fontWeight: 'bold' }}
                                    >Upload documents & video links of your prototype.

                                    </label>
                                    <CardText>
                                        {this.props?.ideaDetails?.prototype_link}
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card className="p-1">
                                <CardBody>
                                    <label
                                        htmlFor="teams"
                                        className=""
                                        style={{ fontSize: '1rem', fontWeight: 'bold' }}
                                    >
                                        13.   Did your team complete and submit the workbook to your school Guide teacher?
                                    </label>
                                    <CardText>
                                        {this.props?.ideaDetails?.workbook}
                                    </CardText>
                                </CardBody>
                            </Card>



                        </div>
                    </div>
                    {/* ----------------------------------- */}
                    <img
                        src={IdeaPage3}
                        alt="IdeaPage3"
                        style={{
                            width: '100%',
                            padding: '0'
                        }}
                    />
                </div>
            </div>
        );
    }
}
export default detailToDownload;
