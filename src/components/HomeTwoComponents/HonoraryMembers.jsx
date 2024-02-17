import React from "react";
import about3 from "../../assets/images/all-img/about3.png";
import about_us from "../../assets/images/about-us/about-us.png";
import Dr_Bernd_Giebel from "../../assets/images/members-images/Dr. Bernd Giebel.jpg";
import Professor_Asim_K_Duttaroy from "../../assets/images/members-images/Professor Asim K. Duttaroy.jpg";
import Dr_Suresh_Mathivanan from "../../assets/images/members-images/Dr. Suresh Mathivanan.jpg";
import Dr_Suvendra_Nath_Bhattacharyya from "../../assets/images/members-images/Dr. Suvendra Nath Bhattacharyya.jpg";
import Dr_Ashim_Gupta from "../../assets/images/members-images/Dr Ashim Gupta.jpg";
import Dr_P_Satish_Chandra from "../../assets/images/members-images/Dr. P. Satish Chandra.jpg";
import Prof_Pallu_Reddanna from "../../assets/images/members-images/Prof. Pallu Reddanna.jpg";
import Prof_Amit_Kumar_Dinda from "../../assets/images/members-images/Prof. Amit Kumar Dinda.jpg";
import Prof_Ranbir_Chander_Sobti from "../../assets/images/members-images/Prof. Ranbir Chander Sobti.jpg";

const HonoraryMembers = () => {
  return (
    <div className="about-area section-padding" style={{paddingBottom:"0"}}>
      <div className="container">
        <div className="text-center">
          <div className="column-title ">
             <span className="shape-bg">Honorary</span> Members
          </div>
        </div>

        <div className="mini-title text-center">INTERNATIONAL</div>

        <div className="grid grid-cols-12 gap-[30px] mb-5" style={{alignItems:"center"}}>
          <div className="xl:col-span-4 lg:col-span-4 col-span-12">
            <img src={Dr_Bernd_Giebel} alt="" className=" block w-full rounded" />
          </div>
          <div className="xl:col-span-8 lg:col-span-8 col-span-12">
            <div className=" mb-8" style={{textAlign:"justify"}}>
              <strong>Dr. Bernd Giebel,</strong> a renowned figure in regenerative medicine and stem cell research, serves as the founding director of Exosla Ltd. and held the position of founding president of the German Society of Extracellular Vesicles (GSEV) from March 2017 to October 2023. His groundbreaking contributions at the University of Duisburg-Essen's Institute for Transfusion Medicine focus on early human hematopoiesis, hematopoietic stem cell regulation, and therapeutic applications of mesenchymal stromal cell-derived small extracellular vesicles (MSC-EVs).
            </div>
            <div className=" mb-8" style={{textAlign:"justify"}}>
              Dr. Giebel's research significantly advances stem cell biology, particularly in asymmetric cell division and lineage specification in hematopoietic progenitors. His work on MSC-EVs showcases their therapeutic potential in treating graft-versus-host disease, and he has optimized their production for clinical use. Dr. Giebel's group introduced technical solutions for extracellular vesicle characterization, pioneering the use of NTA in 2011 and imaging flow cytometry in 2018 for more intricate single EV characterization.
            </div>
            <div className=" mb-8" style={{textAlign:"justify"}}>
              As a leader in EV research, Dr. Giebel plays key roles in the International Society of Extracellular Vesicles (ISEV) and the International Society for Cell and Gene Therapy (ISCT). His global recognition in EV biology and therapy is evident in his advisory roles with companies like Innovex Therapeutics, EVOX, ReNeuron, Mursla, and PL Bioscience.
            </div>
            <div className=" mb-8" style={{textAlign:"justify"}}>
              With a PhD from the University of Cologne and a prolific academic career, Dr. Giebel has extensively published in stem cell research and EV biology. His commitment to advancing medical science through research, collaboration, and innovation establishes him as a distinguished figure in the scientific community.
            <a href="https://www.linkedin.com/in/bernd-giebel-23253213/" target="_blank"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-secondary bg-opacity-[0.08] text-2xl text-secondary
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:linkedin"></iconify-icon>
                  </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-[30px] mb-5" style={{alignItems:"center"}}>
          <div className="xl:col-span-8 lg:col-span-8 col-span-12">
            <div className=" mb-8" style={{textAlign:"justify"}}>
              <strong>Professor Asim K. Duttaroy,</strong> an accomplished Indian-born American medical scientist, currently holds the position of Professor at the Faculty of Medicine, University of Oslo, Norway. With a remarkable career spanning over 385 research papers, numerous book chapters, and several international patents, Dr. Duttaroy has made significant contributions to the field (h index 54, 10 index 156).
            </div>
            <div className=" mb-8" style={{textAlign:"justify"}}>
              One of his notable achievements is the discovery of a tomato extract that prevents blood platelet aggregation, a groundbreaking development in cardiovascular health. During his tenure at the Rowett Research Institute, UK, Dr. Duttaroy conducted groundbreaking research on the fatty acid transport system in the human placenta, advancing our understanding of nutrient transfer to fetuses.
            </div>
            <div className=" mb-8" style={{textAlign:"justify"}}>
              As the respected Editor-In-Chief of the Food & Nutrition Research journal, Dr. Duttaroy also serves on the editorial boards of Prostaglandins Leukotrienes and Essential Fatty Acids, Nutrients, and the European Journal of Lipid Science and Technology. His research extends to fetal brain development and the identification of anti-platelet factors in tomatoes, leading to the creation of Fruitflow®, the first European product with an approved health claim. This product, now globally available, attests to Dr. Duttaroy's profound impact on health and nutrition. Moreover, he serves as a panel member nominating candidates for the Nobel Prize in Physiology or Medicine.
            </div>
            <div className=" mb-8" style={{textAlign:"justify"}}>
              Given his expertise and extensive research, Dr. Duttaroy serves as a valuable advisor for the Indian Extracellular Vesicle Society. His contributions to nutritional science, particularly in cardiovascular health and fetal development, align seamlessly with the Society's mission to explore and leverage the potential of extracellular vesicles in medicine and biology.
            <a href="https://www.linkedin.com/in/professor-asim-k-duttaroy-67a65014/" target="_blank"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-secondary bg-opacity-[0.08] text-2xl text-secondary
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:linkedin"></iconify-icon>
                  </a>
            </div>
          </div>
          <div className="xl:col-span-4 lg:col-span-4 col-span-12">
            <img src={Professor_Asim_K_Duttaroy} alt="" className=" block w-full rounded" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-[30px] mb-5" style={{alignItems:"center"}}>
          <div className="xl:col-span-4 lg:col-span-4 col-span-12">
            <img src={Dr_Suresh_Mathivanan} alt="" className=" block w-full rounded" />
          </div>
          <div className="xl:col-span-8 lg:col-span-8 col-span-12">
            <div className=" mb-8" style={{textAlign:"justify"}}>
              <strong>Dr. Suresh Mathivanan,</strong> a distinguished figure in biochemistry and genetics, is a Professor at La Trobe University, Melbourne, Australia. Serving as the Director of the Research Centre for Extracellular Vesicles (RCEV), he boasts expertise in proteomics and bioinformatics, holding dual PhDs from Kuvempu University, India, and Johns Hopkins University, USA. Renowned for groundbreaking research in exosomes, specifically their roles in cancer and intercellular communication, Dr. Mathivanan leads the RCEV, a prominent hub for cutting-edge extracellular vesicle research.
            </div>
            <div className=" mb-8" style={{textAlign:"justify"}}>
              Under his guidance, the RCEV has excelled, particularly in unraveling the intricacies of exosome formation, evident in over 91 highly cited publications amassing 17,100 citations. Dr. Mathivanan's academic journey includes a significant postdoctoral tenure at the Ludwig Institute for Cancer Research, Melbourne, Australia, focusing on cancer cell-derived exosomes.
            </div>
            <div className=" mb-8" style={{textAlign:"justify"}}>
              Acknowledged with prestigious fellowships, such as the NH&MRC Peter Doherty fellowship (2011) and the ARC DECRA award (2015), Dr. Mathivanan continues to receive support for his research, currently holding an ARC Future Fellowship (2018-2022), delving deeper into exosome biogenesis.
            </div>
            <div className=" mb-8" style={{textAlign:"justify"}}>
              His commitment reflects in numerous grants and projects exploring Arrcd4's role in extracellular vesicle biogenesis, understanding cargo sorting into exosomes, and investigating exosomal membrane composition in intercellular signaling. Dr. Mathivanan's work extends across diverse fields, impacting tissue homeostasis to colorectal cancer drug resistance.
            </div>
            <div className=" mb-8" style={{textAlign:"justify"}}>
              As an honorary member of the Indian Extracellular Vesicles Society, Dr. Mathivanan blends academic excellence with pioneering research, significantly contributing to the global understanding of extracellular vesicles in human health and disease. His extensive expertise, innovative research, and impactful publications establish him as a leading figure in extracellular vesicle research.
            <a href="https://www.linkedin.com/in/suresh-mathivanan-72a163a8/" target="_blank"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-secondary bg-opacity-[0.08] text-2xl text-secondary
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:linkedin"></iconify-icon>
                  </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-[30px] mb-5" style={{alignItems:"center"}}>
          <div className="xl:col-span-8 lg:col-span-8 col-span-12">
            <div className=" mb-8" style={{textAlign:"justify"}}>
              <strong>Dr. Suvendra Nath Bhattacharyya,</strong> a renowned molecular biologist and epigeneticist, currently serves as a Professor at the University of Nebraska Medical Center (UNMC) and Nebraska Medicine Center. Originating from West Bengal, India, Dr. Bhattacharyya's academic journey began with an M.Sc. from Calcutta University, followed by a transformative PhD from Jadavpur University, laying the foundation for a distinguished career in molecular biology.
            </div>
            <div className=" mb-8" style={{textAlign:"justify"}}>
              His expertise in microRNA (miRNA) and extracellular vesicles (EVs) has significantly contributed to our understanding of their roles in diseases, particularly in Leishmania infection. Dr. Bhattacharyya's innovative research has led to the development of therapeutic protocols for Kala azar, showcasing his ability to translate scientific discoveries into practical medical applications.
            </div>
            <div className=" mb-8" style={{textAlign:"justify"}}>
              Having established himself as a leading scientist at the Indian Institute of Chemical Biology, Dr. Bhattacharyya's contributions have been recognized with prestigious awards, including the Shanti Swarup Bhatnagar Prize, Sun Pharma Research Award, and Khosla National Award. Internationally acclaimed, he has received the Young Scientist Award from AAAS-GE Healthcare and the Swarna Jayanthi Fellowship.
            </div>
            <div className=" mb-8" style={{textAlign:"justify"}}>
              As a Professor at UNMC, Dr. Bhattacharyya actively mentors emerging scientists and serves as an honorary member of the Indian Extracellular Vesicles Society (IEVS), demonstrating his commitment to advancing extracellular vesicle research. With over 91 publications in top scientific journals, his distinguished career has solidified his standing in the scientific community. His association with IEVS further amplifies his contribution to society's objectives, showcasing Dr. Bhattacharyya as a revered figure in molecular biology and medical sciences.
            <a href="https://en.wikipedia.org/wiki/Suvendra_Nath_Bhattacharyya" target="_blank"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-secondary bg-opacity-[0.08] text-2xl text-secondary
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:wikipedia"></iconify-icon>
                  </a>
            </div>
          </div>
          <div className="xl:col-span-4 lg:col-span-4 col-span-12">
            <img src={Dr_Suvendra_Nath_Bhattacharyya} alt="" className=" block w-full rounded" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-[30px] mb-5" style={{alignItems:"center"}}>
          <div className="xl:col-span-4 lg:col-span-4 col-span-12">
            <img src={Dr_Ashim_Gupta} alt="" className=" block w-full rounded" />
          </div>
          <div className="xl:col-span-8 lg:col-span-8 col-span-12">
            <div className=" mb-8" style={{textAlign:"justify"}}>
              <strong>Dr Ashim Gupta,</strong> an esteemed authority in regenerative medicine, boasts an impressive array of credentials, including an MS, PhD, and MBA from the USA. He holds the titles of Board Certified Diplomat (DABRM) and Fellow (FABRM) of the American Board of Regenerative Medicine, establishing him as a leader in the field.
            </div>
            <div className=" mb-8" style={{textAlign:"justify"}}>
              As the dynamic Founder and CEO of Regenerative Orthopaedics in Noida, India, Dr. Gupta exemplifies his dedication to advancing medical science in the region. He is also the Founder and President of Future Biologics in Georgia, USA, showcasing his global influence in biotechnology and regenerative medicine.
            </div>
            <div className=" mb-8" style={{textAlign:"justify"}}>
              In academia, Dr. Gupta serves as a Professor and Chief Science Officer at the South Texas Orthopaedic Research Institute (STORI Inc.) in Texas, USA. His role underscores his commitment to pioneering research and education in orthopaedics and regenerative medicine.
            </div>
            <div className=" mb-8" style={{textAlign:"justify"}}>
              Dr. Gupta's multifaceted roles across continents highlight his significant impact on the medical field, particularly in the innovative realm of regenerative medicine. His leadership positions in corporate and academic settings reveal a unique blend of scientific expertise, business acumen, and a visionary approach to healthcare.
            <a href="https://scholar.google.com/citations?user=VUT5PTYAAAAJ&hl=en" target="_blank"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-secondary bg-opacity-[0.08] text-2xl text-secondary
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:google"></iconify-icon>
                  </a>
            </div>
          </div>
        </div>

        <div className="mini-title text-center">NATIONAL</div>

        <div className="grid grid-cols-12 gap-[30px] mb-5" style={{alignItems:"center"}}>
          <div className="xl:col-span-8 lg:col-span-8 col-span-12">
            <div className=" mb-8" style={{textAlign:"justify"}}>
              <strong>Dr. P. Satish Chandra</strong> is a distinguished figure in neurology, particularly renowned for his groundbreaking contributions to epilepsy research. Currently serving as an Advisor and senior Consultant at Bangalore's Apollo Institute of Neurosciences since 2017, and as an Honorary Professor at the University of Liverpool since 2014, his career exemplifies exceptional expertise and a global perspective.
            </div>
            <div className=" mb-8" style={{textAlign:"justify"}}>
              During his pivotal tenure as Director and Vice-Chancellor at NIMHANS (2010-2016), Dr. Satishchandra elevated the institute to 'National Importance' status in India. His 35-year journey at NIMHANS saw him architect India's inaugural Comprehensive Epilepsy Programme, integrating advanced technologies with innovative approaches in neurology and psychiatry.
            </div>
            <div className=" mb-8" style={{textAlign:"justify"}}>
              His impactful research spans genetics, epidemiology, and pioneering treatments for epilepsy. Notably, his work on 'Hot Water Epilepsy' and significant contributions to the ILAE epilepsy classification have left an indelible mark. With 304 publications and an impressive h-index of 41, Dr. Satishchandra's scholarly output is formidable. He is the author and editor of pivotal books in neurology, and his contributions have earned him prestigious accolades, including the 'Distinguished Academician' and 'Ambassador For Epilepsy' awards.
            </div>
            <div className=" mb-8" style={{textAlign:"justify"}}>
              In influential roles within national and international neurology and epilepsy organizations, Dr. Satish chandra demonstrates unwavering commitment. His efforts to raise epilepsy awareness in India, utilizing innovative methods like the 'Street Play Model' and bridging the epilepsy treatment gap under WHO-SEARO’s support, highlight his deep dedication to healthcare. Dr. Satishchandra's multi-dimensional contributions have solidified his status as a venerated figure in the field, making him a beacon of inspiration and innovation in the medical community globally.
            <a href="https://www.linkedin.com/in/dr-p-satish-chandra/" target="_blank"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-secondary bg-opacity-[0.08] text-2xl text-secondary
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:linkedin"></iconify-icon>
                  </a>
            </div>
          </div>
          <div className="xl:col-span-4 lg:col-span-4 col-span-12">
            <img src={Dr_P_Satish_Chandra} alt="" className=" block w-full rounded" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-[30px] mb-5" style={{alignItems:"center"}}>
          <div className="xl:col-span-4 lg:col-span-4 col-span-12">
            <img src={Prof_Pallu_Reddanna} alt="" className=" block w-full rounded" />
          </div>
          <div className="xl:col-span-8 lg:col-span-8 col-span-12">
            <div className=" mb-8" style={{textAlign:"justify"}}>
              <strong>Prof. Pallu Reddanna,</strong> an esteemed honorary member, brings over 40 years of extensive experience in inflammation and cancer research. As Professor Emeritus at the School of Life Sciences, University of Hyderabad, he has a distinguished career marked by around 200 published papers and the successful supervision of 41 Ph.D. students.
            </div>
            <div className=" mb-8" style={{textAlign:"justify"}}>
              Currently serving as the Executive President of the Federation of Asian Biotech Associations (FABA) and a Director of ASPIRE, Prof. Reddanna holds a significant global influence in the biotech landscape. He played a pivotal role as the founder Director of the National Institute of Animal Biotechnology, contributing to institution building.
            </div>
            <div className=" mb-8" style={{textAlign:"justify"}}>
              His collaborative efforts with Pharma and Biotech industries have earned prestigious accolades, including the "Outstanding Contribution Award (Pharma)" from the Chemtech Foundation and the "Outstanding Scientist Award for the Benefit of Industry" from the Federation of Andhra Pradesh Chamber of Commerce and Industry (FAPCCI). The Rockefeller Foundation Biotechnology Career Award and the Royan International Award have recognized his exceptional work.
            </div>
            <div className=" mb-8" style={{textAlign:"justify"}}>
              In academic administration, Prof. Reddanna has held key positions such as Head of the Department, Coordinator of the Center for Biotechnology, and Dean of the School of Life Sciences. Elected as the Vice-President of Agri Biotech Foundation, he has been instrumental in establishing the Technology Business Incubator (TBI) and BioNEST incubation centers, along with ASPIRE, contributing significantly to the growth of the scientific and entrepreneurial ecosystem.
            <a href="https://www.linkedin.com/in/reddanna-pallu-76762b18/" target="_blank"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-secondary bg-opacity-[0.08] text-2xl text-secondary
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:linkedin"></iconify-icon>
                  </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-[30px] mb-5" style={{alignItems:"center"}}>
          <div className="xl:col-span-8 lg:col-span-8 col-span-12">
            <div className=" mb-8" style={{textAlign:"justify"}}>
              <strong>Prof. Amit Kumar Dinda,</strong> an esteemed Professor at the Department of Pathology, All India Institute of Medical Sciences, New Delhi, serves as an honorary advisor to the Indian Extracellular Vesicle Society, exemplifying the convergence of scientific excellence and visionary leadership. His illustrious career in pathology and nanomedicine spans experimental pathology, immunopathology, cancer biology, tissue engineering, and nanotechnology in medicine.
            </div>
            <div className=" mb-8" style={{textAlign:"justify"}}>
              With 339 publications in indexed journals, available on PubMed under "dinda a," and an additional 25 in non-indexed journals, Prof. Dinda's scholarly impact is profound. He has also contributed significantly to academia as an editor of 2 books and author of 14 book chapters. Prof. Dinda's innovative spirit is evident through the 8 patents he holds.
            </div>
            <div className=" mb-8" style={{textAlign:"justify"}}>
              Encompassing Nanomedicine & Nanotoxicity, Renal Pathology, Tissue Engineering & Biomaterials, Oncopathology, Pharmacology & Experimental Pathology, and Miscellaneous, his research covers a broad spectrum. As a principal investigator, Prof. Dinda has played a pivotal role in pioneering projects, including nanoparticle-based drug delivery systems and non-invasive cancer detection technologies, showcasing his commitment to advancing medical science.
            </div>
            <div className=" mb-8" style={{textAlign:"justify"}}>
              Prof. Dinda's diverse contributions make him an invaluable member of the Indian Extracellular Vesicle Society. His guidance is crucial in driving innovative research and promoting advancements in the study of extracellular vesicles, holding significant implications for healthcare and medical research. With a career marked by excellence, Prof. Dinda continues to shape the future of nanomedicine and pathology, leaving an indelible mark on the scientific community.
            <a href="https://www.linkedin.com/in/amit-kumar-dinda-4767a930/" target="_blank"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-secondary bg-opacity-[0.08] text-2xl text-secondary
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:linkedin"></iconify-icon>
                  </a>
            </div>
          </div>
          <div className="xl:col-span-4 lg:col-span-4 col-span-12">
            <img src={Prof_Amit_Kumar_Dinda} alt="" className=" block w-full rounded" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-[30px] mb-5" style={{alignItems:"center"}}>
          <div className="xl:col-span-4 lg:col-span-4 col-span-12">
            <img src={Prof_Ranbir_Chander_Sobti} alt="" className=" block w-full rounded" />
          </div>
          <div className="xl:col-span-8 lg:col-span-8 col-span-12">
            <div className=" mb-8" style={{textAlign:"justify"}}>
              <strong>Prof. Ranbir Chander Sobti,</strong> a renowned Indian cell biologist and educationist, holds the distinguished position of honorary member/advisor at the Indian Extracellular Vesicle Society (IEVS). With a remarkable career, he served as the Vice-Chancellor of Panjab University and Babasaheb Bhimrao Ambedkar University, Lucknow.
            </div>
            <div className=" mb-8" style={{textAlign:"justify"}}>
              Prof. Sobti, a luminary in plant genetics, has contributed significantly to the scientific community with over 240 published articles and 22 influential books, such as "Essentials of Biotechnology" and "Emerging Trends in Biomedical Science and Health." Recognized as a Fellow by esteemed science academies like the Indian National Science Academy and the National Academy of Sciences, India, he received the Padma Shri in 2009 for his outstanding contributions to literature and education.
            </div>
            <div className=" mb-8" style={{textAlign:"justify"}}>
              During his tenure at Panjab University, Prof. Sobti established the Centre of Biotechnology and introduced 65 industry-oriented courses, exemplifying his commitment to merging academic excellence with practical applications. His research, primarily focused on cancer biology, has garnered widespread citations, reflecting his impactful contributions to the field.
            </div>
            <div className=" mb-8" style={{textAlign:"justify"}}>
              As a distinguished member of IEVS, Prof. Sobti is poised to bring a wealth of knowledge and experience, fostering innovative research and advancements in the study of extracellular vesicles, crucial for understanding complex diseases. His appointment is anticipated to significantly enhance research and education in this vital area of biomedical science, promising a new era of growth and development for the society.
            <a href="https://en.wikipedia.org/wiki/Ranbir_Chander_Sobti" target="_blank"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-secondary bg-opacity-[0.08] text-2xl text-secondary
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:wikipedia"></iconify-icon>
                  </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HonoraryMembers;
