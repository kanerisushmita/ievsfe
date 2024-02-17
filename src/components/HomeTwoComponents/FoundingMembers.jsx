import React,{useEffect} from "react";
import about3 from "../../assets/images/all-img/about3.png";
import about_us from "../../assets/images/about-us/about-us.png";
import Dr_Sasidhar from "../../assets/images/members-images/1. Dr Sasidhar.jpeg";
import Dr_Saroj from "../../assets/images/members-images/2. Dr Saroj.jpg";
import Dr_Madhen_JeyRam from "../../assets/images/members-images/3. Dr Madhen JeyRam.jpeg";
import Sreekanth_Patnam from "../../assets/images/members-images/sreekath patnam.jpeg";
import Anula from "../../assets/images/members-images/5. Anula.jpg";
import Dr_Praveena from "../../assets/images/members-images/praveena.jpg";
import Dr_Surajit_Pathak from "../../assets/images/members-images/7. Dr. Surajit Pathak.jpg";
import Dr_Joveeta_Joseph from "../../assets/images/members-images/8. Dr Joveeta Joseph.jpg";
import Dr_Anbarasu_kannan from "../../assets/images/members-images/9. Dr. Anbarasu kannan.jpg";
import Dr_Mairaj_Ahmed from "../../assets/images/members-images/10. Dr Mairaj Ahmed.jpg";
import Kartik from "../../assets/images/members-images/11.Kartik.jpg";
import Dr_Krishna_KKI from "../../assets/images/members-images/12. Dr Krishna KKI.jpg";

const FoundingMembers = () => {
  return (
    <div  className="about-area section-padding"  style={{paddingBottom:"0"}}>
      <div className="container">
        <div className="text-center">
          {/* <div className="mini-title">Some Fun Fact</div> */}
          <div className="column-title ">
             <span className="shape-bg">Founding</span> Members
          </div>
        </div>

        <div className="grid grid-cols-12 gap-[30px] mb-5" style={{alignItems:"center"}}>
          <div className="xl:col-span-4 lg:col-span-4 col-span-12">
            <img src={Dr_Sasidhar} alt="" className=" block w-full rounded" />
          </div>
          <div className="xl:col-span-8 lg:col-span-8 col-span-12">
            <div className="mini-title">PRESIDENT</div>
            {/* <h4 className="column-title ">
              About{" "}
              <span className="shape-bg">IEVS</span>
            </h4> */}
            <div className=" mb-8" style={{textAlign:"justify"}}>
              <strong>Dr. Manda Venkata Sasidhar,</strong> the President of the Indian Extracellular Vesicle Society (IEVS), holds academic ties with Andhra University, Heinrich Heine University, and UCLA. With a rich background in research and leadership roles at Gland Pharma, VINSBioproducts, and GVKBio, he currently serves as the Chief Scientific Officer at Apollo Hospitals Educational and Research Foundation. As the founder of Urvogelbio, Dr. Sasidhar is a pioneer in advancing exosomal diagnostics and therapeutics. His illustrious career is marked by multiple patents and over 25 scientific publications. In his capacity as IEVS President, Dr. Sasidhar is committed to fostering scientific integrity, diversity, innovation, and translational research in the field of extracellular vesicle studies.
            <a href="http://www.linkedin.com/in/mvsasidhar" target="_blank"
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
            <div className="mini-title">VICE PRESIDENT- RESEARCH</div>
            {/* <h4 className="column-title ">
              About{" "}
              <span className="shape-bg">IEVS</span>
            </h4> */}
            <div className=" mb-8" style={{textAlign:"justify"}}>
              <strong>Dr. Saroj Kumar, Ph.D.,</strong> Additional Professor at AIIMS, New Delhi and visiting professor at LTU, Sweden, focuses on early screening of neurodegenerative diseases and cancers, along with studying cancer microenvironment and tooth biomineralization. He has published 60+ high-impact research papers. His work highlights exosomes for disease recognition, targeted drug delivery, and therapeutics.
              <a href="https://www.linkedin.com/in/saroj-kumar-7a96221a" target="_blank"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-secondary bg-opacity-[0.08] text-2xl text-secondary
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:linkedin"></iconify-icon>
                  </a>
            </div>
          </div>
          <div className="xl:col-span-4 lg:col-span-4 col-span-12">
            <img src={Dr_Saroj} alt="" className=" block w-full rounded" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-[30px] mb-5" style={{alignItems:"center"}}>
          <div className="xl:col-span-4 lg:col-span-4 col-span-12">
            <img src={Dr_Madhen_JeyRam} alt="" className=" block w-full rounded" />
          </div>
          <div className="xl:col-span-8 lg:col-span-8 col-span-12">
            <div className="mini-title">VICE-PRESIDENT- EDUCATION</div>
            {/* <h4 className="column-title ">
              About{" "}
              <span className="shape-bg">IEVS</span>
            </h4> */}
            <div className=" mb-8" style={{textAlign:"justify"}}>
              <strong>Madhan Jeyaraman, MBBS, MS (Orthopedics),</strong> is an Assistant Professor at ACS Medical College, Chennai. With numerous awards and over 200 research publications, his expertise spans Molecular Orthopaedics, Stem Cells, and more, with a focus on Exosomes and Extracellular Vesicles in Trauma & Rheumatology disorders.
              <a href="https://www.linkedin.com/in/madhan-jeyaraman-418010107" target="_blank"
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
            <div className="mini-title">GENERAL SECRETARY</div>
            {/* <h4 className="column-title ">
              About{" "}
              <span className="shape-bg">IEVS</span>
            </h4> */}
            <div className=" mb-8" style={{textAlign:"justify"}}>
              <strong>Patnam. Sreekanth, MSc,</strong> is a scientist at Apollo Hospitals Educational and Research Foundation (AHERF), Hyderabad, since 2018. His work is focused on developing diagnostics and therapeutics in glioma and prostate cancer. He is the founder director of Exomed Therapeutics Pvt Ltd and previously worked at Singapore Institute for Clinical Sciences (SICS) and Nanyang Technological University (NTU). He secured a startup grant from the Indian government's Ambedkar Young Entrepreneur League (AYEL).
              <a href="https://www.linkedin.com/in/patnam-sreekanth-34bbb35/" target="_blank"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-secondary bg-opacity-[0.08] text-2xl text-secondary
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:linkedin"></iconify-icon>
                  </a>
            </div>
          </div>
          <div className="xl:col-span-4 lg:col-span-4 col-span-12">
            <img src={Sreekanth_Patnam} alt="" className=" block w-full rounded" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-[30px] mb-5" style={{alignItems:"center"}}>
          <div className="xl:col-span-4 lg:col-span-4 col-span-12">
            <img src={Anula} alt="" className=" block w-full rounded" />
          </div>
          <div className="xl:col-span-8 lg:col-span-8 col-span-12">
            <div className="mini-title">JOINT SECRETARY</div>
            {/* <h4 className="column-title ">
              About{" "}
              <span className="shape-bg">IEVS</span>
            </h4> */}
            <div className=" mb-8" style={{textAlign:"justify"}}>
              <strong>Anula Divyash Singh, Ph.D.,</strong> a life science professional, holding 13 years of varied experience in both industry and academic research. She is currently working as a scientist at AHERF, her focus lies in translational biology and exosome research. Her research includes development of diagnostics and therapeutics in the area of organ transplantation, diabetic nephropathy and cancers.
              <a href="https://www.linkedin.com/in/anula-singh-9b4b9786" target="_blank"
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
            <div className="mini-title">TREASURER</div>
            {/* <h4 className="column-title ">
              About{" "}
              <span className="shape-bg">IEVS</span>
            </h4> */}
            <div className=" mb-8" style={{textAlign:"justify"}}>
              <strong>Dr. Ganji Praveena, Ph.D.,</strong> obtained her doctorate in Biological Sciences from CSIR-IICT, Hyderabad, with a specialization in nanotechnology and exosome biology. She currently holds the position of Scientist at Urvogelbio Pvt Ltd, where her research focuses on the use of neuronal exosomes for diagnosing and treating neurodegenerative conditions like Parkinson's and Alzheimer's. Her work is poised to have a significant impact on the development of medical diagnostics and therapeutics, shaping the future of healthcare.
              <a href="https://www.linkedin.com/in/dr-ganji-praveena-4b518321a" target="_blank"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-secondary bg-opacity-[0.08] text-2xl text-secondary
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:linkedin"></iconify-icon>
                  </a>
            </div>
          </div>
          <div className="xl:col-span-4 lg:col-span-4 col-span-12">
            <img src={Dr_Praveena} alt="" className=" block w-full rounded" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-[30px] mb-5" style={{alignItems:"center"}}>
          <div className="xl:col-span-4 lg:col-span-4 col-span-12">
            <img src={Dr_Surajit_Pathak} alt="" className=" block w-full rounded" />
          </div>
          <div className="xl:col-span-8 lg:col-span-8 col-span-12">
            <div className="mini-title">COMMITTEE CHAIR HEAD</div>
            {/* <h4 className="column-title ">
              About{" "}
              <span className="shape-bg">IEVS</span>
            </h4> */}
            <div className=" mb-8" style={{textAlign:"justify"}}>
              <strong>Prof. Surajit Pathak, Ph.D.,</strong> is a current Professor at Chettinad Academy of Research and Education, Chennai. He has been a Principal Research Scientist at Linkoping University, Sweden. His research centers on intra and extracellular microRNAs for early colorectal cancer detection, yielding over 120 published articles. He is affiliated with prominent research bodies like Indian Association of Cancer Research and Indian Science Congress, etc.
              <a href="https://www.linkedin.com/in/dr-surajit-pathak-3483972a" target="_blank"
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
            <div className="mini-title">COMMUNICATIONS HEAD</div>
            {/* <h4 className="column-title ">
              About{" "}
              <span className="shape-bg">IEVS</span>
            </h4> */}
            <div className=" mb-8" style={{textAlign:"justify"}}>
              <strong>Dr. Joveeta Joseph, Ph.D.,</strong> is a Medical Microbiologist, leads Microbiology Services at LV Prasad Eye Institute-Network. She specializes in ocular infection diagnostics and research, concentrating on host-pathogen interactions and exosome roles in microbial infections. Grants from DST-SERB and ICMR support her work. With 130+ peer-reviewed manuscripts, she's editorially affiliated with several journals.
              <a href="https://www.linkedin.com/in/dr-joveeta-joseph-07505854" target="_blank"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-secondary bg-opacity-[0.08] text-2xl text-secondary
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:linkedin"></iconify-icon>
                  </a>
            </div>
          </div>
          <div className="xl:col-span-4 lg:col-span-4 col-span-12">
            <img src={Dr_Joveeta_Joseph} alt="" className=" block w-full rounded" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-[30px] mb-5" style={{alignItems:"center"}}>
          <div className="xl:col-span-4 lg:col-span-4 col-span-12">
            <img src={Dr_Anbarasu_kannan} alt="" className=" block w-full rounded" />
          </div>
          <div className="xl:col-span-8 lg:col-span-8 col-span-12">
            <div className="mini-title">MEMBERSHIP HEAD</div>
            {/* <h4 className="column-title ">
              About{" "}
              <span className="shape-bg">IEVS</span>
            </h4> */}
            <div className=" mb-8" style={{textAlign:"justify"}}>
              <strong>Dr. Anbarasu Kannan, Ph.D.,</strong> his research focused on diverse exosomal roles in tumor microenvironments, particularly in breast, prostate, and Head and Neck cancers at CFTRI, Mysore. His work yielded numerous publications in esteemed journals, showcasing expertise in cancer and exosome biology. With a decade of experience spanning six cancer types, his efforts center on early cancer detection biomarkers.
              <a href="https://www.ievs.in/#" target="_blank"
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
            <div className="mini-title">EDUCATION HEAD</div>
            {/* <h4 className="column-title ">
              About{" "}
              <span className="shape-bg">IEVS</span>
            </h4> */}
            <div className=" mb-8" style={{textAlign:"justify"}}>
              <strong>Dr. Mairaj Ahmed Ansari, Ph.D.,</strong> is an Assistant Professor at Jamia Hamdard, New Delhi, heading a lab focused on host-pathogen interaction and molecular immunology. He is active in scientific societies, including the Indian Immunology Society. His research engages in host-pathogen interaction, molecular virology, immunology, and extracellular vesicle-based vaccine and drug delivery research.
              <a href="https://www.linkedin.com/in/dr-mairaj-ansari-31832226" target="_blank"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-secondary bg-opacity-[0.08] text-2xl text-secondary
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:linkedin"></iconify-icon>
                  </a>
            </div>
          </div>
          <div className="xl:col-span-4 lg:col-span-4 col-span-12">
            <img src={Dr_Mairaj_Ahmed} alt="" className=" block w-full rounded" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-[30px] mb-5" style={{alignItems:"center"}}>
          <div className="xl:col-span-4 lg:col-span-4 col-span-12">
            <img src={Kartik} alt="" className=" block w-full rounded" />
          </div>
          <div className="xl:col-span-8 lg:col-span-8 col-span-12">
            <div className="mini-title">INDUSTRIAL COMMUNICATION</div>
            {/* <h4 className="column-title ">
              About{" "}
              <span className="shape-bg">IEVS</span>
            </h4> */}
            <div className=" mb-8" style={{textAlign:"justify"}}>
              <strong>Dr. S. Kartik Kumar, Ph.D.,</strong> is a scientist at AHERF, Hyderabad, specialized in exosome-based cancer drug delivery. With 6 years of combined industrial and academic research, he focuses on innovative small extracellular vesicle (sEV) strategies to enhance cancer therapy precision. He has published 7 research articles in high-impact journals.
              <a href="https://www.linkedin.com/in/s-karthik-kumar-3a330612a" target="_blank"
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
            <div className="mini-title">EVENTS HEAD</div>
            {/* <h4 className="column-title ">
              About{" "}
              <span className="shape-bg">IEVS</span>
            </h4> */}
            <div className=" mb-8" style={{textAlign:"justify"}}>
              <strong>Dr. Krishna K Inampudi, Ph.D.,</strong> is an Additional Professor at AIIMS, New Delhi, has 35+ impactful research articles in international journals. His research focused on metabolomics and proteomics from extracellular vesicles for therapeutic advancements in cardiovascular diseases, NSCLC, and oral squamous cell carcinoma.
              <a href="http://linkedin.com/in/krishna-k-inampudi-2b629129" target="_blank"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-secondary bg-opacity-[0.08] text-2xl text-secondary
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:linkedin"></iconify-icon>
                  </a>
            </div>
          </div>
          <div className="xl:col-span-4 lg:col-span-4 col-span-12">
            <img src={Dr_Krishna_KKI} alt="" className=" block w-full rounded" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default FoundingMembers;
