import wowfoodWeb1Url from '../assets/img/wowfood/ecommerce/web1.png';
import wowfoodWeb2Url from '../assets/img/wowfood/ecommerce/web2.png';
import wowfoodWeb3Url from '../assets/img/wowfood/ecommerce/web3.png';
import wowfoodWeb4Url from '../assets/img/wowfood/ecommerce/web4.png';
import wowfoodWeb5Url from '../assets/img/wowfood/ecommerce/web5.png';
import wowfoodWeb6Url from '../assets/img/wowfood/ecommerce/web6.png';
import wowfoodWeb7Url from '../assets/img/wowfood/ecommerce/web7.png';

import wowfoodYuganHomeUrl from '../assets/img/wowfood/ecommerce/yugan_home.png';
import wowfoodYuganHomeMobileUrl from '../assets/img/wowfood/ecommerce/yugan_home_m.png';
import wowfoodYuganCartUrl from '../assets/img/wowfood/ecommerce/yugan_cart.png';
import wowfoodYuganCartMobileUrl from '../assets/img/wowfood/ecommerce/yugan_cart_m.png';
import wowfoodYuganOrderUrl from '../assets/img/wowfood/ecommerce/yugan_order.png';
import wowfoodYuganOrderMobileUrl from '../assets/img/wowfood/ecommerce/yugan_order_m.png';

import wowfoodOrderUrl from '../assets/img/wowfood/dashboard/order.png';
import wowfoodDashboardUrl from '../assets/img/wowfood/dashboard/dashboard.png';

import readmooAudioWebUrl from '../assets/img/readmoo/audio_web.png';
import readmooAudioPlayerUrl from '../assets/img/readmoo/audio_player.png';

import readmooAnniversary7thUrl from '../assets/img/readmoo/anniversary7th.png';
import readmooAnniversary7thWallUrl from '../assets/img/readmoo/anniversary7th_wall.png';

import readmooEditorChoice2019Url from '../assets/img/readmoo/editor-choice-2019.png';
import readmooAnnualReport2019Url from '../assets/img/readmoo/annual-report2019 .png';
import readmooBe2019HomeUrl from '../assets/img/readmoo/be2019_home.png';

import studentUscUrl from '../assets/img/student/usc.jpg';
import studentTrainingUrl from '../assets/img/student/training.jpg';
import pumoWeb1Url from '../assets/img/pumo/web1.jpg';
import pumoWeb2Url from '../assets/img/pumo/web2.jpg';

const Portfolio = () => {
  return (
    <div className="mt-14">
      <div className="mb-1 text-4xl font-bold text-center text-slate-600">Portfolio</div>
      <hr />
      <div className="my-5">
        <div className="text-base font-medium text-gray-500">
          WoWFood <span className="font-normal">新場景股份有限公司</span>
        </div>
        <p className="text-sm font-normal text-gray-800">
          使用技術: HTML, SCSS, JS(ES6), TypeScript, React, React-Router, Redux, Next.js,
          Bootstrap, Axios, axios-mock-adapter, Eslint, Prettier
        </p>
        <p className="mb-6 text-sm font-normal text-gray-800">
          為台灣第一家以網路垂直領域意見領袖（a.k.a
          網紅）作為標籤的快銷品公司，公司成立於2019 年，為新媒體網紅解決方案提供方
          PressPlay 設立專門作網紅商品孵化的子公司。
          <br />
          與技術團隊夥伴一起從 0 到 1
          主要包含開發一套前後台電商整合系統，主要包含兩個部分：
        </p>

        <p className="text-sm font-normal text-gray-800">
          1.前台電商網站
          <a
            className="inline-flex items-center ml-2 text-sm text-blue-600 underline underline-offset-1"
            href="https://yuganyugan.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            魚乾的魚乾
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ width: '1rem' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <a
            className="inline-flex items-center ml-2 text-sm text-blue-600 underline underline-offset-1"
            href="https://rensingeatshot.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            任性 eat 下
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ width: '1rem' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <a
            className="inline-flex items-center ml-2 text-sm text-blue-600 underline underline-offset-1"
            href="https://misscrunchy.cc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            我很脆
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ width: '1rem' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </p>
        <p className="mb-2 text-sm text-gray-600">
          包含模組化首頁，靜態分頁，問與答，會員，商品頁，購物車，結帳..等
        </p>

        <div className="grid grid-cols-3 gap-4 my-4">
          <img className="rounded-lg shadow-lg" src={wowfoodWeb1Url} />
          <img className="rounded-lg shadow-lg" src={wowfoodWeb2Url} />
          <img className="rounded-lg shadow-lg" src={wowfoodWeb3Url} />
        </div>

        <div className="grid grid-cols-4 gap-4">
          <img className="rounded-lg shadow-lg" src={wowfoodWeb4Url} />
          <img className="rounded-lg shadow-lg" src={wowfoodWeb5Url} />
          <img className="rounded-lg shadow-lg" src={wowfoodWeb6Url} />
          <img className="rounded-lg shadow-lg" src={wowfoodWeb7Url} />
        </div>

        <div className="grid grid-cols-4 gap-4 items-center my-4">
          <img className="col-span-3 rounded-lg shadow-lg" src={wowfoodYuganHomeUrl} />
          <img className="rounded-lg shadow-lg" src={wowfoodYuganHomeMobileUrl} />
        </div>

        <div className="grid grid-cols-4 gap-4 items-center my-4">
          <img className="rounded-lg shadow-lg" src={wowfoodYuganCartMobileUrl} />
          <img className="col-span-3 rounded-lg shadow-lg" src={wowfoodYuganCartUrl} />
        </div>

        <div className="grid grid-cols-4 gap-4 items-center my-4">
          <img className="col-span-3 rounded-lg shadow-lg" src={wowfoodYuganOrderUrl} />
          <img className="rounded-lg shadow-lg" src={wowfoodYuganOrderMobileUrl} />
        </div>

        <p className="mt-12 text-sm font-normal text-gray-800">2.後台 CMS 管理平台</p>
        <p className="mb-2 text-sm text-gray-600">
          包含每日營業額/訂單統計，商品/SKU
          管理，物流管理，顧客管理，促銷及活動設定，分銷管理，數據分析，網站設計..等
        </p>
        <div className="text-center">
          <img className="mx-auto rounded-lg shadow-lg" src={wowfoodDashboardUrl} />
          <img className="my-14 mx-auto rounded-lg shadow-lg" src={wowfoodOrderUrl} />
        </div>
        <hr />
        <div className="mt-8 text-base font-medium text-gray-500">
          Readmoo <span className="font-normal">群傳媒股份有限公司</span>
        </div>
        <p className="mb-6 text-sm font-normal text-gray-800">
          提供全球華文讀者買書、看書、分享書的電子書服務
          <br />
          主要參與的部分：
          <ul className="list-disc">
            <li>維護官網 legacy code 與開發新功能</li>
            <li>活動頁切版與 API 串接</li>
            <li>完成有聲書閱讀器</li>
            <li>協助 APP team 測試 webview 並進行除錯與優化</li>
          </ul>
        </p>
        <p className="text-sm font-normal text-gray-800">
          部分在線專案：
          <a
            className="inline-flex items-center ml-2 text-sm text-blue-600 underline underline-offset-1"
            href="https://readmoo.com/annual-report/2019"
            target="_blank"
            rel="noopener noreferrer"
          >
            2019 年度報告
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ width: '1rem' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <a
            className="inline-flex items-center ml-2 text-sm text-blue-600 underline underline-offset-1"
            href="https://readmoo.com/events/editor-choice/2019/index"
            target="_blank"
            rel="noopener noreferrer"
          >
            2019 第七屆犢力回顧
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ width: '1rem' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <a
            className="inline-flex items-center ml-2 text-sm text-blue-600 underline underline-offset-1"
            href="https://readmoo.com/anniversary/7th/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Readmoo 7 週年活動頁
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ width: '1rem' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <a
            className="inline-flex items-center ml-2 text-sm text-blue-600 underline underline-offset-1"
            href="https://readmoo.com/events/be2019"
            target="_blank"
            rel="noopener noreferrer"
          >
            2019 線上國際書展
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ width: '1rem' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <a
            className="inline-flex items-center ml-2 text-sm text-blue-600 underline underline-offset-1"
            href="https://new-read.readmoo.com/mooreader/290211939000101/preview"
            target="_blank"
            rel="noopener noreferrer"
          >
            web 版有聲書閱讀器
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ width: '1rem' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </p>

        <div className="grid grid-cols-2 gap-4 items-center my-4">
          <img className="rounded-lg shadow-lg" src={readmooAnniversary7thUrl} />
          <img className="rounded-lg shadow-lg" src={readmooAnniversary7thWallUrl} />
        </div>

        <div className="grid grid-cols-3 gap-4 items-center my-4">
          <img className="rounded-lg shadow-lg" src={readmooEditorChoice2019Url} />
          <img className="rounded-lg shadow-lg" src={readmooAnnualReport2019Url} />
          <img className="rounded-lg shadow-lg" src={readmooBe2019HomeUrl} />
        </div>

        <div className="grid grid-cols-4 gap-4 items-center my-4">
          <img className="col-span-3 rounded-lg shadow-lg" src={readmooAudioWebUrl} />
          <img className="rounded-lg shadow-lg" src={readmooAudioPlayerUrl} />
        </div>

        <hr />
        <div className="mt-8 text-base font-medium text-gray-500">
          Pumo <span className="font-normal">捕夢網數位科技有限公司</span>
        </div>
        <p className="mb-6 text-sm font-normal text-gray-800">
          主要服務： 主機代管IDC / 主機租賃 / 雲端主機 / 虛擬主機
          <br />
          主要參與的部分：
          <ul className="list-disc">
            <li>維護官網 legacy code</li>
            <li>協助客戶進行形象網站的規劃到切版完成並與後端協作套路內 CMS 系統</li>
            <li>訓練客戶使用 CMS 系統</li>
          </ul>
        </p>

        <img className="mt-2 rounded-lg shadow-lg" src={pumoWeb1Url} />
        <img className="mt-14 mb-8 rounded-lg shadow-lg" src={pumoWeb2Url} />
        <hr />
        <div className="mt-8 text-base font-medium text-gray-500">
          {`USC Communcation Design & Training Courses`}
        </div>
        <img className="mt-2 rounded-lg shadow-lg" src={studentUscUrl} />
        <div className="py-4 mt-14 text-center bg-black rounded-lg">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/EfMDMVIjxDM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mx-auto"
          ></iframe>
        </div>
        <img className="mt-14 rounded-lg shadow-lg" src={studentTrainingUrl} />
      </div>
    </div>
  );
};

export default Portfolio;
