(() => {
  document.body.dataset.page = 'home';
  document.querySelector('header')?.replaceWith(Object.assign(document.createElement('div'), {id:'site-header'}));
  document.querySelector('footer')?.replaceWith(Object.assign(document.createElement('div'), {id:'site-footer'}));
  const main = document.querySelector('main');
  if (!main) return;
  main.innerHTML = `
    <section class="scroll-hero" aria-labelledby="home-title" data-scroll-hero>
      <div class="scroll-hero-sticky">
        <div class="scroll-scenes" aria-hidden="true">
          <figure class="scroll-scene is-active" data-scroll-scene><img src="assets/servtech-hero-poster.webp" width="1920" height="1080" alt="" fetchpriority="high"></figure>
          <figure class="scroll-scene" data-scroll-scene><img src="assets/service-valve-hq.webp" width="1400" height="900" alt=""></figure>
          <figure class="scroll-scene" data-scroll-scene><img src="assets/service-turbine-hq.webp" width="1400" height="900" alt=""></figure>
          <div class="scroll-hero-shade"></div><div class="scroll-grid"></div>
        </div>
        <div class="hero-lights" aria-hidden="true">
        <span class="plant-light red" style="--x:65.8%;--y:7.5%;--s:8px;--t:5.2s;--d:-1.1s"></span>
        <span class="plant-light red" style="--x:66.1%;--y:14%;--s:6px;--t:4.6s;--d:-3.2s"></span>
        <span class="plant-light amber" style="--x:59%;--y:27%;--s:7px;--t:5.8s;--d:-2.4s"></span>
        <span class="plant-light red" style="--x:49%;--y:33%;--s:6px;--t:4.9s;--d:-.7s"></span>
        <span class="plant-light amber" style="--x:38%;--y:35%;--s:7px;--t:5.5s;--d:-4.1s"></span>
        <span class="plant-light red" style="--x:43%;--y:41%;--s:5px;--t:4.4s;--d:-1.8s"></span>
        <span class="plant-light warm" style="--x:70%;--y:34%;--s:6px;--t:6.1s;--d:-3.7s"></span>
        <span class="plant-light amber" style="--x:82%;--y:25%;--s:5px;--t:5.1s;--d:-2.1s"></span>
        <span class="plant-light warm" style="--x:76%;--y:49%;--s:6px;--t:5.7s;--d:-.3s"></span>
        <span class="plant-light amber" style="--x:63%;--y:58%;--s:5px;--t:4.8s;--d:-3s"></span>
        <span class="plant-light warm" style="--x:57%;--y:62%;--s:5px;--t:6.3s;--d:-4.8s"></span>
        </div>
        <div class="scroll-beats">
          <article class="scroll-beat is-active" data-scroll-beat>
            <span class="eyebrow">Servtech Technical Services LLC</span><h1 id="home-title">Keeping critical industry moving.</h1><p>Integrated Mechanical, Valve, Boiler & HRSG, Fabrication, Instrumentation, Calibration, Electrical, Technical Manpower and Industrial Supply solutions for Power Generation, Desalination, Heavy Industries and Marine.</p><div class="hero-actions"><a class="btn" href="quote.html">Request technical support</a><a class="btn btn-outline" href="services.html">Explore capabilities</a></div>
          </article>
          <article class="scroll-beat scroll-beat-center" data-scroll-beat>
            <span class="eyebrow">Workshop precision</span><h2>Inspect.<br>Restore.<br>Verify.</h2><p>Controlled overhaul, machining, testing and documentation return critical equipment to service with confidence.</p>
          </article>
          <article class="scroll-beat scroll-beat-final" data-scroll-beat>
            <span class="eyebrow">Field execution</span><h2>From Dubai to demanding assets across the GCC.</h2><p>Experienced teams, disciplined planning and responsive support—from planned outages to urgent field requirements.</p><div class="scroll-stats"><span><strong>1991</strong>Serving industry since</span><span><strong>Workshop + field</strong>Integrated delivery</span><span><strong>24/7</strong>Technical support</span></div>
          </article>
        </div>
        <div class="scroll-watermark" aria-hidden="true">SERVTECH</div>
        <div class="scroll-progress" aria-label="Hero story progress"><span class="is-active">01</span><span>02</span><span>03</span></div>
        <div class="scroll-cue" aria-hidden="true"><i></i> Scroll to explore</div>
      </div>
    </section>
    <div class="intro-band"><strong>Built around safe execution, technical control and dependable turnaround.</strong><span>Assess · Analyze · Act</span></div>

    <section class="home-section" id="services"><div class="section-head"><div><span class="section-kicker">Core capabilities</span><h2 class="section-heading">One technical partner. Thirteen specialist disciplines.</h2><br/><br/><br/></div><p>Servtech Technical Services LLC delivers integrated industrial maintenance, engineering, testing, repair, calibration, fabrication and technical support services for critical facilities throughout the UAE and GCC. By combining workshop capability, mobile field-service teams, shutdown support and project execution resources, Servtech supports customers from inspection and diagnosis through repair, testing, installation, commissioning and ongoing maintenance.
</p></div><div class="capability-grid" id="home-capabilities">
      <a class="capability-card" href="service-valves.html"><img src="assets/service-valve-hq.webp" width="1400" height="900" loading="lazy" alt="Industrial valve refurbishment and testing in a modern workshop"><div class="capability-copy"><small>01</small><h3>Valves Refurbishment, Services &amp; Testing</h3><p>Industrial valve inspection, overhaul, repair, pressure testing and certification.</p><b>View capability →</b></div></a>
      <a class="capability-card" href="service-psv.html"><img src="assets/projects/hq/project-06-valve-workshop.jpg" width="1586" height="992" loading="lazy" alt="Safety valves prepared for specialist workshop repair"><div class="capability-copy"><small>02</small><h3>Safety Valves Repairs, Service</h3><p>Safety and relief valve inspection, repair, overhaul and certified setting.</p><b>View capability →</b></div></a>
      <a class="capability-card" href="service-safety-valve-testing.html"><img src="assets/projects/hq/project-08-safety-valve-testing.jpg" width="1586" height="992" loading="lazy" alt="Safety valve connected to a calibrated pressure test rig"><div class="capability-copy"><small>03</small><h3>Safety Valves Bench &amp; Online Testing</h3><p>Controlled bench, EVT and online testing with documented results.</p><b>View capability →</b></div></a>
      <a class="capability-card" href="service-boiler.html"><img src="assets/gas-plant.avif" width="1417" height="808" loading="lazy" alt="Modern power plant boiler and HRSG equipment"><div class="capability-copy"><small>04</small><h3>HRSG Boilers &amp; AUX Boilers Maintenance</h3><p>HRSG and auxiliary boiler inspection, repair, tube work and outage support.</p><b>View capability →</b></div></a>
      <a class="capability-card" href="service-fabrication.html"><img src="assets/service-fabrication-hq.webp" width="1400" height="900" loading="lazy" alt="Controlled stainless-steel process piping fabrication"><div class="capability-copy"><small>05</small><h3>Fabrication, Piping &amp; Erection</h3><p>Structural steelwork, process piping, precision welding and site installation.</p><b>View capability →</b></div></a>
      <a class="capability-card" href="service-turbine.html"><img src="assets/service-turbine-hq.webp" width="1400" height="900" loading="lazy" alt="Steam turbine rotor inspection during a planned outage"><div class="capability-copy"><small>06</small><h3>Turbine, Rotating Equipment Maintenance</h3><p>Mechanical maintenance for turbines and critical rotating auxiliaries.</p><b>View capability →</b></div></a>
      <a class="capability-card" href="service-machining.html"><img src="assets/service-machining-hq.webp" width="1400" height="900" loading="lazy" alt="Precision CNC machining of a critical industrial component"><div class="capability-copy"><small>07</small><h3>Machining &amp; Reverse Engineering</h3><p>Component restoration, dimensional capture and precision replacement parts.</p><b>View capability →</b></div></a>
      <a class="capability-card" href="service-calibration.html"><img src="assets/projects/hq/project-10-field-valve-service.jpg" width="1586" height="992" loading="lazy" alt="Technicians using calibrated pressure equipment during field valve service"><div class="capability-copy"><small>08</small><h3>Calibration &amp; Certification Services</h3><p>Pressure, temperature, flow and level instrument calibration and certification.</p><b>View capability →</b></div></a>
      <a class="capability-card" href="service-electrical.html"><img src="assets/projects/hq/project-01-power-station.jpg" width="1586" height="992" loading="lazy" alt="Power station electrical infrastructure and industrial process equipment"><div class="capability-copy"><small>09</small><h3>Electrical Services</h3><p>Industrial electrical maintenance, installation, testing and technical support.</p><b>View capability →</b></div></a>
      <a class="capability-card" href="service-shutdown.html"><img src="assets/projects/hq/project-07-hrsg-overhaul.jpg" width="1586" height="992" loading="lazy" alt="Industrial plant equipment prepared for shutdown maintenance"><div class="capability-copy"><small>10</small><h3>Shutdown and Turnaround Support Services</h3><p>Integrated support for safe, controlled plant shutdowns and turnarounds.</p><b>View capability →</b></div></a>
      <a class="capability-card" href="service-instrumentation.html"><img src="assets/projects/hq/project-05-ro-plug-valves.jpg" width="1586" height="992" loading="lazy" alt="Actuated industrial valves and control instrumentation at a water facility"><div class="capability-copy"><small>11</small><h3>Instrumentation Services</h3><p>Instrument installation, maintenance, troubleshooting and commissioning support.</p><b>View capability →</b></div></a>
      <a class="capability-card" href="service-flow-measurement.html"><img src="assets/projects/hq/project-02-valve-overhaul.jpg" width="1586" height="992" loading="lazy" alt="Industrial flow-control valves prepared for workshop inspection"><div class="capability-copy"><small>12</small><h3>Flow Measurement &amp; Metering Services</h3><p>Flowmeter inspection, calibration, installation and metering-system support.</p><b>View capability →</b></div></a>
      <a class="capability-card capability-card-wide" href="service-manpower.html"><img src="assets/service-manpower-hq.webp" width="1400" height="900" loading="lazy" alt="Qualified industrial maintenance personnel at a process facility"><div class="capability-copy"><small>13</small><h3>Technical Manpower Support</h3><p>Qualified personnel for projects, planned shutdowns and maintenance programs.</p><b>View capability →</b></div></a>
    </div><div class="capability-actions"><button class="btn capability-toggle" type="button" aria-expanded="false" aria-controls="home-capabilities">View all services <span aria-hidden="true">↓</span></button></div></section>


<section class="home-section dark-surface" id="industries">
  <div class="section-head">
    <div>
      <span class="section-kicker">Industries served</span>
      <h2 class="section-heading">
        Expertise for critical industries.
      </h2>
    </div>
    <p>
      Specialist industrial maintenance, engineering, testing and
      technical support for demanding operating environments.
    </p>
  </div>

  <div class="industry-grid">

    <a class="industry-item" href="industry-power-generation.html">
      <span>01</span>
      <h3>Power Generation</h3>
      <p>
        Boiler, HRSG, turbine, valve and electrical maintenance
        for power generation facilities.
      </p>
      <b>Explore industry →</b>
    </a>

    <a class="industry-item" href="industry-desalination-water-treatment.html">
      <span>02</span>
      <h3>Desalination &amp; Water Treatment</h3>
      <p>
        Mechanical services, flow control, valve maintenance
        and instrumentation for water facilities.
      </p>
      <b>Explore industry →</b>
    </a>

    <a class="industry-item" href="industry-heavy-industries.html">
      <span>03</span>
      <h3>Heavy Industries</h3>
      <p>
        Fabrication, machining, rotating equipment maintenance
        and shutdown support for industrial plants.
      </p>
      <b>Explore industry →</b>
    </a>

    <a class="industry-item" href="industry-marine-offshore.html">
      <span>04</span>
      <h3>Marine &amp; Offshore</h3>
      <p>
        Technical manpower, mechanical repair, valve services
        and field support for marine and offshore assets.
      </p>
      <b>Explore industry →</b>
    </a>

  </div>
</section>


    <section class="home-section grey" id="about"><div class="proof-layout"><div class="proof-media"><img src="assets/valve.jpg" loading="lazy" alt="Servtech workshop and service operations"><div class="proof-stamp"><strong>Dubai</strong><span>Workshop capability with regional field reach</span></div></div><div class="proof-copy"><span class="section-kicker">About Servtech</span><h2 class="section-heading">Practical engineering. Accountable delivery.</h2><p class="lead">Servtech Technical Services LLC is a UAE-based industrial services company providing integrated maintenance, engineering, repair, testing, calibration, fabrication, technical manpower and industrial supply services. We support power generation, desalination and water-treatment facilities, heavy industries and other asset-intensive operations through experienced technical personnel, workshop facilities, mobile site-service capability and specialist equipment.
</p><ul class="check-list"><li>Mechanical: valves, PSV/SRV, boiler & HRSG, turbine, piping, fabrication and machining.
</li><li>Instrumentation: installation, troubleshooting, loop checking, commissioning and calibration.
</li><li>Electrical: industrial installation, maintenance, testing and shutdown support.
</li><li>Technical resources: engineers, supervisors, technicians and skilled trades.
</li><li>Industrial supply: valves, instruments, mechanical/electrical products and plant spares.
</li></ul><a class="btn" href="about.html">Meet Servtech</a></div></div></section>

    <section class="projects-showcase reveal" id="projects" aria-labelledby="recent-projects-heading">
      <div class="project-heading"><p>We Work With Global Industries!</p><h2 id="recent-projects-heading">Our recent projects</h2><span>Ten representative assignments from Servtech's established project experience.</span></div>
      <div class="project-gallery-frame">
        <div class="project-gallery" data-project-gallery>
          <article class="project-tile" tabindex="0" aria-label="Project 1: Annual overhaul and maintenance at Jebel Ali Power Station"><img src="assets/projects/hq/project-01-power-station.jpg" width="1586" height="992" decoding="async" loading="lazy" alt="Combined-cycle power station at blue hour"><div class="project-caption"><small>Project 01</small><h3>Annual overhaul / maintenance of boilers, auxiliaries &amp; fuel gas system in Plant 1 stations – Jebel Ali Power Station</h3></div></article>
          <article class="project-tile" tabindex="0" aria-label="Project 2: Valve overhaul at Emirates Global Aluminium"><img src="assets/projects/hq/project-02-valve-overhaul.jpg" width="1586" height="992" decoding="async" loading="lazy" alt="Large industrial valves undergoing workshop overhaul"><div class="project-caption"><small>Project 02</small><h3>Overhaul of steam and misc valves in Power &amp; Desal at Emirates Global Aluminium</h3></div></article>
          <article class="project-tile" tabindex="0" aria-label="Project 3: Structural steel fabrication for MAB Oilfield Engineering"><img src="assets/projects/hq/project-03-steel-fabrication.jpg" width="1586" height="992" decoding="async" loading="lazy" alt="Fabricated structural platform with ladders and handrails"><div class="project-caption"><small>Project 03</small><h3>Fabrication of structural steel including support, ladder, and handrail – MAB Oilfield Engineering</h3></div></article>
          <article class="project-tile" tabindex="0" aria-label="Project 4: Valve and fitting replacement at DEWA Jebel Ali"><img src="assets/projects/hq/project-04-steam-feedwater.jpg" width="1586" height="992" decoding="async" loading="lazy" alt="High-pressure steam and feed-water valve system"><div class="project-caption"><small>Project 04</small><h3>Valve and fitting replacement in steam, feed water, and make up water system at DEWA Jebel Ali</h3></div></article>
          <article class="project-tile" tabindex="0" aria-label="Project 5: Super duplex plug valve replacement at DEWA RO Plant"><img src="assets/projects/hq/project-05-ro-plug-valves.jpg" width="1586" height="992" decoding="async" loading="lazy" alt="Stainless-steel plug valves at a reverse-osmosis plant"><div class="project-caption"><small>Project 05</small><h3>Replacement of super duplex stainless steel plug valves at DEWA RO Plant</h3></div></article>
          <article class="project-tile" tabindex="0" aria-label="Project 6: Valve overhauling at Jebel Ali Power Station"><img src="assets/projects/hq/project-06-valve-workshop.jpg" width="1586" height="992" decoding="async" loading="lazy" alt="Multiple valve types in a specialist overhaul workshop"><div class="project-caption"><small>Project 06</small><h3>Overhauling of different types of valves at 'K', 'L1', 'L2', 'M' &amp; 'Mext' at Jebel Ali Power Station</h3></div></article>
          <article class="project-tile" tabindex="0" aria-label="Project 7: HRSG and auxiliary boiler maintenance at Jebel Ali Power Station"><img src="assets/projects/hq/project-07-hrsg-overhaul.jpg" width="1586" height="992" decoding="async" loading="lazy" alt="HRSG structure during planned overhaul maintenance"><div class="project-caption"><small>Project 07</small><h3>Annual overhaul maintenance of HRSGs and auxiliary boilers in Plant 2 at Jebel Ali Power Station</h3></div></article>
          <article class="project-tile" tabindex="0" aria-label="Project 8: Safety valve testing at SEWA Layyah Power Station"><img src="assets/projects/hq/project-08-safety-valve-testing.jpg" width="1586" height="992" decoding="async" loading="lazy" alt="Safety valve connected to a calibrated pressure test rig"><div class="project-caption"><small>Project 08</small><h3>Overhauling, EVT testing and live load testing of safety valves for HRSG and boilers at SEWA Layyah Power Station</h3></div></article>
          <article class="project-tile" tabindex="0" aria-label="Project 9: Boiler maintenance in G Station at Jebel Ali Power Station"><img src="assets/projects/hq/project-09-boiler-inspection.jpg" width="1586" height="992" decoding="async" loading="lazy" alt="Boiler tube inspection during a planned outage"><div class="project-caption"><small>Project 09</small><h3>Annual overhaul / maintenance of boilers in ‘G’ Station Plant 1 at Jebel Ali Power Station</h3></div></article>
          <article class="project-tile" tabindex="0" aria-label="Project 10: Valve refurbishment support in Lebanon"><img src="assets/projects/hq/project-10-field-valve-service.jpg" width="1586" height="992" decoding="async" loading="lazy" alt="Valve specialists providing field service at a coastal power plant"><div class="project-caption"><small>Project 10</small><h3>Supply of valve specialists with equipment for refurbishment of shutoff valves and refurbishment, online testing &amp; certification of safety valves at Deir Ammar &amp; Zahrani Power Plant – Lebanon</h3></div></article>
        </div>
      </div>
    </section>

    <section class="home-section"><div class="section-head"><div><span class="section-kicker">How we work</span><h2 class="section-heading">Controlled from first inspection to return to service.</h2></div><p>A disciplined workflow helps maintain traceability, safety and technical clarity throughout each assignment.</p></div><div class="process-grid"><article><h3>Assess</h3><p>Review operating conditions, equipment history, urgency and required standards.</p></article><article><h3>Analyze</h3><p>Inspect, diagnose and define the most practical repair or service scope.</p></article><article><h3>Execute</h3><p>Deliver controlled workshop or field work with documented quality checks.</p></article><article><h3>Verify</h3><p>Test, certify where applicable, report findings and support reliable handover.</p></article></div></section>

    <section class="home-section client-section" aria-labelledby="client-heading"><div class="section-head"><div><span class="section-kicker">Selected customers</span><h2 class="section-heading" id="client-heading">Trusted across critical industries.</h2></div><p>Organizations and project stakeholders represented across Servtech's established industrial service experience.</p></div>
      <div class="client-strip" aria-label="Selected customers and project stakeholders">
        <div><img src="assets/partners/800113_logo.png" loading="lazy" alt="EPPCO"></div>
        <div><img src="assets/partners/s1-2-1.png" loading="lazy" alt="National Petroleum Construction Company, NPCC"></div>
        <div><img src="assets/partners/dewa.png" loading="lazy" alt="Dubai Electricity and Water Authority, DEWA"></div>
        <div><img src="assets/partners/sapco.png" loading="lazy" alt="Shuweihat Asia Power Company, SAPCO"></div>
        <div><img src="assets/partners/SEWA.png" loading="lazy" alt="Sharjah Electricity, Water and Gas Authority"></div>
        <div><img src="assets/partners/enoc-logo-png-transparent.png" loading="lazy" alt="Emirates National Oil Company, ENOC"></div>
        <div><img src="assets/partners/Siemens_Energy_logo_BG_white_svg.png" loading="lazy" alt="Siemens Energy"></div>
        <div><img src="assets/partners/CAE-Logo-PNG.png" loading="lazy" alt="Control and Applications Emirates"></div>
        <div><img src="assets/partners/fapco.png" loading="lazy" alt="Fujairah Asia Power Company"></div>
        <div><img src="assets/partners/PrimeSouth-Logo-1.png" loading="lazy" alt="PrimeSouth"></div>
        <div><img src="assets/partners/emirates-steel-logo.png" loading="lazy" alt="Emirates Steel"></div>
        <div><img src="assets/partners/ADWEA.png" loading="lazy" alt="Abu Dhabi Water and Electricity Authority"></div>
        <div><img src="assets/partners/goltens-logo.png" loading="lazy" alt="Goltens"></div>
        <div><img src="assets/partners/sembcorp.png" loading="lazy" alt="Sembcorp"></div>
        <div><img src="assets/partners/1200px-ADNOC_logo_svg.png" loading="lazy" alt="Abu Dhabi National Oil Company, ADNOC"></div>
        <div><img src="assets/partners/YTL_Power_International.png" loading="lazy" alt="YTL Power International"></div>
        <div><img src="assets/partners/2750CB2A-5056-B757-5CE215326280E9AE-logo.png" loading="lazy" alt="Emirates Global Aluminium, EGA"></div>
        <div><img src="assets/partners/Hyundai_Engineering_&_Construction_logo.png" loading="lazy" alt="Hyundai Engineering and Construction"></div>
        <div><img src="assets/partners/RCG.png" loading="lazy" alt="RCG"></div>
        <div><img src="assets/partners/TARGET.png" loading="lazy" alt="TARGET Engineering Construction Company"></div>
      </div>
    </section>

    <section class="conversion"><div><span class="section-kicker">Start a technical conversation</span><h2>Have an asset, outage or product requirement?</h2><p>Send the equipment details, service location and required schedule. Our team will review the scope and respond with the next practical step.</p></div><a class="btn" href="quote.html">Request a quotation</a></section>`;
  main.querySelectorAll('.intro-band, .home-section, .conversion').forEach((section) => section.classList.add('reveal'));
  const capabilityGrid = main.querySelector('#home-capabilities');
  const capabilityToggle = main.querySelector('.capability-toggle');
  capabilityToggle?.addEventListener('click', () => {
    const expanded = capabilityToggle.getAttribute('aria-expanded') !== 'true';
    capabilityToggle.setAttribute('aria-expanded', String(expanded));
    capabilityGrid?.classList.toggle('is-expanded', expanded);
    capabilityToggle.innerHTML = expanded
      ? 'Show fewer services <span aria-hidden="true">↑</span>'
      : 'View all services <span aria-hidden="true">↓</span>';
  });
})();
