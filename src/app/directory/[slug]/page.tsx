import Link from "next/link";
import Select from "../Select";
import Image from "next/image";

export default async function Page({ params }: any) {
  const { slug } = params;

  const res = await fetch(
    slug !== "all"
      ? `https://public.opendatasoft.com/api/records/1.0/search/?dataset=medecins&q=&rows=1000&refine.libelle_profession=${slug}`
      : `https://public.opendatasoft.com/api/records/1.0/search/?dataset=medecins&q=&rows=1000`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const specData = await res.json();
  const displayedNames = new Set();

  function filtrerAllMedecins(data: any) {
    const professionsAutorisees = [
      "Gynécologue",
      "Médecin généraliste",
      "Sage-femme",
    ];

    const medecinsFiltres = data.records.filter((record: any) =>
      professionsAutorisees.includes(record.fields.libelle_profession)
    );
    const resultatsMelanges = [...medecinsFiltres]; // Crée une copie du tableau des résultats

    for (let i = resultatsMelanges.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Génère un index aléatoire entre 0 et i
      [resultatsMelanges[i], resultatsMelanges[j]] = [
        resultatsMelanges[j],
        resultatsMelanges[i],
      ]; // Échange les éléments à l'index i et j
    }
    return resultatsMelanges;
  }

  var data;
  slug !== "all"
    ? (data = specData.records)
    : (data = filtrerAllMedecins(specData));

  return (
    <div>
      <h1 className="text-3xl top-xl pt-4 pb-4 text-primary_dark">Annuaire</h1>

      <form className="flex items-center pb-8">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-secondary"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-primary_light text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5"
            placeholder="Search"
            required
          />
        </div>
      </form>

      <div className="flex overflow-x-scroll no-scrollbar pb-6">
        <Select slug={slug} />
      </div>

      <ul className="grid gap-4 grid-cols-3">
        {data!.map((med: any) => {
          if (!displayedNames.has(med.fields.nom)) {
            const fullName = med.fields.nom;
            const nameParts = fullName.split(" ");
            const firstNameInitial = nameParts[0].charAt(0); // Récupère la première lettre du prénom
            const lastName = nameParts[1]; // Récupère le nom

            const formattedName = `${firstNameInitial}. ${lastName}`;
            displayedNames.add(med.fields.nom);
            return (
              <li key={med.recordid}>
                <Link
                  className="flex flex-col items-center text-center"
                  href={""}
                >
                  <Image
                    src="/article1.svg"
                    className="w-16 rounded-full shadow-lg"
                    alt="Avatar circle"
                    width={200}
                    height={200}
                  ></Image>
                  <p className="text-primary_dark text-base font-semibold mt-4 mb-1">
                    {formattedName}
                  </p>
                  <p className="text-primary_dark text-sm font-normal">
                    {med.fields.libelle_profession}
                  </p>
                </Link>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
}
