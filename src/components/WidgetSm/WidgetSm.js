import { Visibility } from "@material-ui/icons";
import "./WidgetSm.css";
import src from "../../assets/profile2.jpg";

const WidgetSm = () => {
  const members = [
    { id: 1, src: src, name: "Ivar Ragnarsson", position: "Product Manager" },
    { id: 2, src: src, name: "Bjorn Ironside", position: "Project Manager" },
    { id: 3, src: src, name: "Ubbe Ragnarsson", position: "UI/UX Designer" },
    { id: 4, src: src, name: "Hvitserk Ragnarsson", position: "Backend Engineer" },
    { id: 5, src: src, name: "Leif Eriksson", position: "Analytics Manager" },
    { id: 6, src: src, name: "Ragnar Lothbrok", position: "Cloud Architect" },
    { id: 7, src: src, name: "Rollo Lothbrok", position: "Cloud Engineer" },
  ];

  return (
    <div className="widget-sm">
        <h3 className="widget-title">New Members</h3>
      {members.map((member) => (
        <div key={member.id} className="member-block">
          <div className="member-img">
            <img src={member.src} alt="member"></img>
          </div>
          <div className="name-block">
            <span className="name">{member.name}</span>
            <span className="position">{member.position}</span>
          </div>
          <div className="display-block">
            <Visibility className="display-icon" />
            <p className="display">Details</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WidgetSm;
