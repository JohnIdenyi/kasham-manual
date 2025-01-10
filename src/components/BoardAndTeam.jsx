import BoardMemberCard from "./BoardMemberCard";
import TeamMemberCard from "./TeamMemberCard";
import { boardMembers } from "../data";
import { teamMembers } from "../data";

export default function BoardAndTeam() {
  return (
    <section className="board-team">
      <div className="container">
        <div>
          <h3 className="board-team__title">Meet our Board of Trustees</h3>
          <div className="board-team__cards">
            {boardMembers.map((item, index) => (
              <BoardMemberCard key={index} {...item} />
            ))}
          </div>
        </div>
        <div className="board-team">
          <h3 className="board-team__title">Meet our team</h3>
          <div className="board-team__cards">
            {teamMembers.map((item, index) => (
              <TeamMemberCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
