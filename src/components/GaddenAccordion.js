import { Accordion } from "react-bootstrap";
const GaddenAccordion = ({ event, active, onClick, title }) => {
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
      <Accordion.Collapse eventKey={event}>
        <div className="accordion-body">
          <p>
            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
            doloremque laudantium totam aperiam eaque quae abillo inventorecy
            veritatis et architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </Accordion.Collapse>
    </div>
  );
};
export default GaddenAccordion;
