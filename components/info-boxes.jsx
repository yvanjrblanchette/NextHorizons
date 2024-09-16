import InfoBox from "@/components/info-box";

const InfoBoxes = () => {
	return (
		<section>
			<div className="max-w-7xl mx-auto px-4 ">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
					<InfoBox
						heading={{ text: "Pour les Locataires", textColor: "text-limegreen-500" }}
						backgroundColor="bg-gray-100"
						textColor="text-marine-700"
						buttonInfo={{ text: "Parcourez les Propriétés", link: "/properties", backgroundColor: "bg-limegreen-500", textColor: "text-marine-600" }}
					>
						Trouvez la propriété locative de vos rêves! Marquez vos propriétés favorites d'un signet pour y accéder plus rapidement et contacter directement les
						propriétaires.
					</InfoBox>
					<InfoBox
						heading={{ text: "Pour les Propriétaires", textColor: "text-marine-700" }}
						backgroundColor="bg-marine-100"
						textColor="text-gray-700"
						buttonInfo={{ text: "Ajoutez une Propriété", link: "/properties/add", backgroundColor: "bg-marine-700", textColor: "text-limegreen-400" }}
					>
						Listez vos propriétés et atteignez un grand bassin des locataires potentiels. Louez-les à la manière Airbnb ou de manière plus standard avec un plus
						long terme.
					</InfoBox>
				</div>
			</div>
		</section>
	);
};
export default InfoBoxes;
