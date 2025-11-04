export const TrustedBy = () => {
  const companies = [
    { name: "Coursera", logo: "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c1bf2f6333755ec893f5_Coursera-Logo_600x600%20(1).svg" },
    { name: "Mastercard", logo: "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c1bf2f6333755ec893d1_Layer_1%20(2).svg" },
    { name: "ViacomCBS", logo: "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c1bf2f6333755ec893fa_ViacomCBS%20(2).svg" },
    { name: "GitHub", logo: "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c1c02f6333755ec8940e_github-2%20(1).svg" },
    { name: "Casper", logo: "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c1c02f6333755ec89435_Casper_Sleep_logo%20(2).svg" },
    { name: "Cloudflare", logo: "https://upload.wikimedia.org/wikipedia/commons/9/94/Cloudflare_Logo.png" },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-muted-foreground mb-12">
          Tech leaders trust Andela to quickly source qualified talent
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center w-full h-16 opacity-60 hover:opacity-100 transition-opacity"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="max-h-10 max-w-full object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
