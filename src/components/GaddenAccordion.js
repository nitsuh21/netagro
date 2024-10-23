import { Accordion } from "react-bootstrap";
const GaddenAccordion = ({ event, active, onClick, title, content }) => {
  return (
    <div className="accordion-card mb-15">
      <div className="accordion-header">
        <Accordion.Toggle
          as="h6"
          eventKey={event}
          aria-expanded={active === event ? "true" : "false"}
          onClick={() => onClick()}
          className="accordion-title"
        >
          {title}
        </Accordion.Toggle>
      </div>
      <Accordion.Collapse eventKey={event} content={content}>
        <div className="accordion-body">
          <p>
            {content}
          </p>
        </div>
      </Accordion.Collapse>
    </div>
  );
};
export default GaddenAccordion;
