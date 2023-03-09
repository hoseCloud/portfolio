import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div id="Projects">
      <h1 className="text-4xl font-bold text-center py-4">Team Project</h1>
      <div className="flex flex-wrap m-2 space-x-1">
        <ProjectCard
          title="ClipSill"
          description="ClipSill은 동영상에서 핵심 내용을 추출하여 요약해주는 프로그램입니다."
          imgUrl="https://raw.githubusercontent.com/hoseCloud/portfolio/project.md/team-project/ClipSill/clipSillComplete.png"
          projectUrl="https://github.com/hoseCloud/portfolio/blob/project.md/team-project/ClipSill/ClipSill.md"
        />
        <ProjectCard
          title="CtfList"
          description="모바일로 Ctf 목록들을 쉽게 확인하고 일정을 관리할 수 있는 애플리케이션입니다."
          imgUrl="https://raw.githubusercontent.com/hoseCloud/portfolio/project.md/team-project/CtfList/ctfList.png"
          projectUrl="https://github.com/hoseCloud/portfolio/blob/project.md/team-project/CtfList/CtfList.md"
        />
        <ProjectCard
          title="OTTally"
          description="OTT 구독 관리를 쉽게할 수 있는 애플리케이션입니다."
          imgUrl="https://raw.githubusercontent.com/hoseCloud/portfolio/project.md/team-project/Ottally/account.png"
          projectUrl="https://github.com/hoseCloud/portfolio/blob/project.md/team-project/Ottally/OTTally.md"
        />
        <ProjectCard
          title="Easy Fuzzer Framework"
          description="퍼저를 사용하기 쉽게 GUI로 구현할 수 있는 프레임워크입니다."
          imgUrl="https://raw.githubusercontent.com/hoseCloud/portfolio/project.md/team-project/Easy%20Fuzzer%20Framework/fuzzingData.png"
          projectUrl="https://github.com/hoseCloud/portfolio/blob/project.md/team-project/Easy%20Fuzzer%20Framework/Easy%20Fuzzer%20Framework.md"
        />
      </div>
      <h1 className="text-4xl font-bold text-center py-4">Toy Project</h1>
      <div className="flex flex-wrap m-2 space-x-1">
        <ProjectCard
          title="practice_JS"
          description="웹페이지에서 동작하는 웹 시작 페이지입니다."
          imgUrl="https://raw.githubusercontent.com/hoseCloud/portfolio/project.md/toy-project/practice_js/mainScreen.png"
          projectUrl="https://github.com/hoseCloud/portfolio/blob/project.md/toy-project/practice_js/practice_js.md"
        />
        <ProjectCard
          title="practice_flutter"
          description="모바일에서 동작하는 웹툰 뷰어입니다."
          imgUrl="https://raw.githubusercontent.com/hoseCloud/portfolio/project.md/toy-project/practice_flutter/detail_screen_screenshot.png"
          projectUrl="https://github.com/hoseCloud/portfolio/blob/project.md/toy-project/practice_flutter/practice_flutter.md"
        />
        <ProjectCard
          title="practice_reactJS"
          description="웹페이지에서 동작하는 영화 평점 페이지입니다."
          imgUrl="https://raw.githubusercontent.com/hoseCloud/portfolio/project.md/toy-project/practice_reactJS/home.png"
          projectUrl="https://github.com/hoseCloud/portfolio/blob/project.md/toy-project/practice_reactJS/practice_reactJS.md"
        />
        <ProjectCard
          title="portfolio"
          description="hoseCloud(허세정)의 포트폴리오 웹페이지입니다."
          imgUrl="https://raw.githubusercontent.com/hoseCloud/portfolio/project.md/toy-project/portfolio/main_page.png"
          projectUrl="https://github.com/hoseCloud/portfolio/blob/project.md/toy-project/portfolio/portfolio.md"
        />
      </div>
    </div>
  );
}

export default Projects;
