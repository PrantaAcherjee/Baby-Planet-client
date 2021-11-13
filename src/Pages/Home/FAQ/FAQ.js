import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div className="row">
           <div className="col-md-6">
             <br />
            <h4>Let's disscuss about your question</h4>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Question:1
                        Why a three year package?
                    </Accordion.Header>
                    <Accordion.Body>
                        When we start to work with you, you immediately start to benefit from a Membership. During the life of your 3 Year Membership we regularly release updates to the system, adding new, exciting and highly useful features to make your life easier and your school website more creative. Any new features are provided as part of your membership. You won’t be asked to pay a premium for new features and you won’t have to wait for your next upgrade.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Question:2 If I want to keep my current site after three years can I just pay the support and hosting?</Accordion.Header>
                    <Accordion.Body>
                        Unfortunately not; cards on the table time. If we did that, we would then need to accurately manage which clients had access to which new features as we build and release them. The sheer number of feature releases and product updates means this would become unmanageable on a client-by-client basis within the current, highly competitive price range we offer. Your price would go up and the service would go down and that’s not something we’ll allow to happen.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Question:3 What happens if I decide to leave after three years?</Accordion.Header>
                    <Accordion.Body>
                        We obviously hope that you would never want to leave us, and we work hard to make sure you don’t. An example of that is that one of our Directors will personally check your website every six months to make sure you’re making the most of your website. However, if you decide to leave, all the site content will be yours to transfer to your new provider. The system is unfortunately not transferrable to another provider as it is our own, bespoke system, built specifically for the education sector.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Question:4 What site changes are included within support?
                    </Accordion.Header>
                    <Accordion.Body>
                        During the set-up process we will make colour, graphic design and content changes without additional charge. Some may incur a small development fee which would be agreed with your Account Manager but don’t let that scare you! We try very hard to make sure we don’t ask for any extra money because we know times are tight and we don’t want to keep asking for money, that’s not who we are. After we have successfully launched your new website any design or structural amends are charged at the Standard Per Hour Development Rate.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Question:5 Is Training provided?</Accordion.Header>
                    <Accordion.Body>
                        Of course. We offer a number of options for training and we will work with you to make absolutely sure that your team are proficient at making sure you get the most from your new website. Included in the standard package is online training on how to use your new website with affordable options for in-person training, either at our training venue in Lancashire, or at your school.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Question:6 How do you ensure OFSTED Compliance?
                    </Accordion.Header>
                    <Accordion.Body>
                        We have some nice technology in place to make sure that we are notified as soon as any changes are made to the requirements set by DfE regarding school websites. We send out information when these changes are made and we will do a full OFSTED Ready Website check of your website before your site launch. We also offer quarterly half day workshop sessions to ensure that your site remains compliant after launch. The best bit? Our unique Ofsted Ready Website Checker helps you make sure your website is compliant all year round.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
 
           </div>
           <div className="col-md-6">
              <img src="https://image.freepik.com/free-vector/website-faq-section-user-help-desk-customer-support-frequently-asked-questions-problem-solution-quiz-game-confused-man-cartoon-character_335657-1602.jpg" alt="" />
           </div>
        </div>
    );
};

export default FAQ;