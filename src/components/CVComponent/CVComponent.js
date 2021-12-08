import React from 'react';
import styles from './CVComponent.module.css';
import CompanyCVComponent from './CompanyCVComponent/CompanyCVComponent';
let prensaIberica = {
  'business':'Prensa Iberica',
  'date':'2020-03 - Now',
  'job': 'Data Engineer',
  'product':'Data Engineer for the second biggest spanish news conglomerate with +30 sites.',
  'bulletPoints': ['Shaped a 1000+ workers newsletter editorial from a subjective culture to a <b> data driven </b> approach.',
                    'Develop a series of automatizations to stream the daily flow of data of Google Analytics to different endpoints. This has been done with a high understanding of <b>Python</b> and <b>SQL</b> to make the data move from \
                    <b>Google Analytics</b> to <b>Big Query</b> & <b>SQL Server</b> and to <b>Superset</b> & <b>Datastudio</b>.',
                    'Built a custom A/B Testing module with analytics functionalities inside <b>Google Tag Manager</b>.',
                    'Worked on the data standardization of +30 sites derived from a recent adquisition. Tagging our sites with a high understanding of the <b>DOM</b> & <b>Javascript</b> to give proper shape to the Datalayer',
                    'Worked on the migration of the internal CMP (Customer Management Platform) to Piano, guaranteeing funnel and subscription analytics compabilities.',
                    'Established <b>CI/CD</b> procedures in the creation of the internal analytics method, which will be shipped as a product. This way the team has been give more flexibility and security towards new changes and refactoring.',
                    ],
'website': 'https://www.prensaiberica.es/'
};



let GMV = {
  'business':'GMV',
  'date':'2019-07 - 2020-03',
  'job': 'Junior Project Engineer',
  'product':'Satellite Reference Database - METEOSAT Third Generation.',
  'bulletPoints': ['Developed a configuration database of telemetry & telecommand patterns using <b> Oracle SQL </b>, <b> Java </b> <b>Oracle WebLogic</b>.',
                'Finished an internal version control system with synchronization capabilities. A custom Git-like tool for the satellite components moduling.'],
  'website': 'https://gmv.com/en-es'
};

let LEDA = {
  'business':'LEDA-MC Consulting',
  'date':'2017-05 - 2019-05',
  'job': 'Junior Consultant',
  'product':'Productivity Software consultant for a worldwide telecomunications company.',
  'bulletPoints': ['Feasability approvals based on IFPUG Methodology.',
                  'Productivity analysis of vendors.',
                  'Drafting and presenting productivity Dashboards for the client.',
                  'Analysis and studies of objectives for productivity improvement.',
                  'Automated internal operative of company. The project was working on a very slow manual skill efficiency for importing and exporting excel files. \
                   With the development of macros in <b> VBA </b> and <b> scheduled processes </b> of Python, most of the manual operations were done automatically.'],
  'website': 'https://www.leda-mc.com/en/'
};
const CVComponent = () => (
 
  <div className={styles.CVComponent}>
    <h1 className="nomato">Curriculum Vitae</h1>

    <div>
      <h2>Experience</h2>
      <CompanyCVComponent company={prensaIberica} ></CompanyCVComponent>
      <CompanyCVComponent company={GMV} ></CompanyCVComponent>
      <CompanyCVComponent company={LEDA} ></CompanyCVComponent>
    </div>

    <div>
      <h2>Education</h2>
      <div className={styles.space}>
      <h3>Universidad de Alcalá (UAH). [2014-2019]</h3>
      <h5 className={styles.space}>Computer Engineering (Grado en Ingeniería Informática).</h5>
      </div>
     
      
    </div>

    <div> 
      <h2>Languages</h2>
      <h5 className={styles.space}>Spanish (Native)</h5>
      <h5 className={styles.space}>English (Bilingual)</h5>
      <h5 className={styles.space}>Hindi / Urdu (Parental Heritage)</h5>
    </div>

  </div>
);

CVComponent.propTypes = {};

CVComponent.defaultProps = {};

export default CVComponent;
