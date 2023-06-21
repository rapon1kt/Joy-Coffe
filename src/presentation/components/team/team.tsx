import React from "react";
import { data } from "../../../data";
import "./team.css";

const Team: React.FC = () => {
	return (
		<div className="team-container">
			<div className="team">
				<h1 className="team-title">
					<i
						className="fa-solid fa-people-group"
						style={{ color: "#545454" }}
					></i>
					Team
				</h1>
				<div className="team-persons">
					{data.map((person) => (
						<div className={"person " + person.name}>
							<img
								className="person-images"
								src={person.image}
								alt={person.name}
								onClick={() =>
									window.open(`https://www.instagram.com/${person.instagram}`)
								}
							/>
							<div className="person-insta">
								<i
									className="fa-brands fa-instagram"
									style={{ color: "#d8ae8e", fontSize: "2.2rem" }}
								></i>
								<h3 className="person-nick">@{person.instagram}</h3>
							</div>
							<h3 className="person-description">
								{person.name}
								<br /> {person.role}
							</h3>
						</div>
					))}
				</div>
			</div>

			<div className="team-description">
				<h1 className="team-description-title">
					<i className="fa-solid fa-circle-info"></i> Sobre Nós
				</h1>
				<h3 className="team-description-text">
					"Joy Coffee" - sua loja de café especializada! Localizada no coração
					da cidade, a Joy Coffee é um paraíso para os amantes do café. Com um
					ambiente acolhedor e aromas irresistíveis, a loja oferece uma
					experiência única para todos os clientes. <br />
					<br /> Ao entrar na Joy Coffee, você será recebido por uma equipe
					apaixonada por café, pronta para compartilhar seu conhecimento e
					ajudá-lo a descobrir novos sabores. O balcão de atendimento exibe uma
					variedade de grãos cuidadosamente selecionados de diferentes regiões
					do mundo. Desde os intensos e encorpados grãos africanos até os sutis
					e suaves grãos sul-americanos, há algo para agradar a todos os
					paladares.
				</h3>
			</div>
		</div>
	);
};

export default Team;
