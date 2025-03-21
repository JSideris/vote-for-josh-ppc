import React from "react";
import IssueCard from "./IssueCard";
import { IssueCardProps } from "../../types";
import "./Platform.css";

const Platform: React.FC = () => {
	const issues: IssueCardProps[] = [
		{
			icon: "faGlobe",
			title: "International Trade",
			description: "All major parties seem to think Canada needs a trade war. The PPC disagrees. The USA will tax their citizens for our imports regardless—we need to stop treating ourselves like a US mining colony; diversify our production and partners; and start consuming what we produce to come out ahead."
		},
		{
			icon: "faShoppingCart",
			title: "Costs and Food Prices",
			description: "Canadians are tired of overpaying for basics (like milk). Our prices are double what Americans pay because big corporations receive special protection. It's time to break up these cozy deals, cut costs, and make our economy work for us, not just the insiders."
		},
		{
			icon: "faLeaf",
			title: "Environment",
			description: "Protecting our environment matters, but we don't have to choose between green goals and good jobs. Let's build a thriving economy that funds clean technology and real solutions—because a strong Canada is a green Canada."
		},
		{
			icon: "faHospital",
			title: "Healthcare, Housing, and Infrastructure",
			description: "Our healthcare waits are long, housing is unaffordable, and roads are clogged because rapid population growth hasn't come with a plan. I'm all for welcoming newcomers, but we need to build homes, hospitals, and infrastructure first—not just pile pressure on what's already stretched thin."
		},
		{
			icon: "faShieldAlt",
			title: "Crime",
			description: "Crime's rising, and Canadians deserve to feel safe. We'll crack down on repeat offenders and deport non-citizen criminals while giving law-abiding folks the right to protect themselves. However, we also need to tackle the root causes—more jobs and opportunities so that fewer people turn to crime in the first place."
		},
		{
			icon: "faBalanceScale",
			title: "Corruption in Ottawa and Propaganda",
			description: "Since 2015, Ottawa has handed over $4B to big media. Your tax dollars shouldn't fund cozy insider deals; we need a free press that holds politicians accountable, not a government mouthpiece. As your MP, I'll fight corruption head-on, starting with transparency."
		}
	];

	return (
		<section id="platform" className="container">
			<h2 className="section-title">Platform & Issues</h2>
			<div className="platform">
				{issues.map((issue, index) => (
					<IssueCard
						key={index}
						icon={issue.icon}
						title={issue.title}
						description={issue.description}
					/>
				))}
			</div>

			<div className="highlight">
				<h3>Bottom Line — Canadians Deserve a Choice</h3>
				<p>The Liberals and Conservatives keep recycling the same tired ideas, but Canada deserves better. We're not doomed—we can have a stronger, fairer country. Open your mind, talk to your neighbours, and let's <b>break the uniparty grip</b> together.</p>
			</div>
		</section>
	);
};

export default Platform;