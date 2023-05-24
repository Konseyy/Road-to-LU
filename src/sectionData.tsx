interface Section {
  id: string;
  title: { lv: string; en: string };
  content: { lv: JSX.Element; en: JSX.Element };
  image: JSX.Element;
}
export const sections: Section[] = [
  {
    id: 'childhood',
    title: { lv: 'Bērnība', en: 'Childhood' },
    content: {
      lv: (
        <>
          <p>
            Tāpat kā daudzi citi šāda vecuma bērni, es nebiju pārāk ieinteresēts domāt par nākotni, es vienkārši gribēju darīt lietas, kas
            man šķita interesantas. Lielākoties tas sastēvēja no spēļu spēlēšana datorā, multeņu skatīšanās, spēlēšanās figūriņām un iešanas
            ārā ar draugiem.
          </p>
          <p>
            Ar jaunu interesantu lietu es iepazinos aptuveni 2. klasē, kad pajautāju tētim, kā darbojas mājaslapas. Viņš bija apguvis kaut
            ko līdzīgu tīmekļa dizaina kursam pirms pāris gadiem, jo viņa darbs bija saistījās ar mākslu/dizainu, tāpēc viņš man varēja
            parādīt <a href="https://en.wikipedia.org/wiki/HTML">HTML</a> pamatprincipus. Tas mani pārsteidza, es varēju kaut ko uzrakstīt,
            un tas vienkārši parādījās uz ekrāna, es pat varēju ievietot attēlus un tos mainīt, kad novietoju kursoru uz tiem. Es patiešām
            gribēju iemācīties vairāk.
          </p>
          <p>
            Beigu beigās es izveidoju ļoti vienkāršu mājaslapu un izdrukāju <a href="https://en.wikipedia.org/wiki/HTML">HTML</a> pirmkodu
            uz papīra lapas, lai es varētu to parādīt saviem draugiem skolā. Atskatoties, tas nebija nekas īpašs, bet bērnam otrajā klasē
            tas noteikti nebija ierasta lieta ko nest uz skolu. Bija gandarījums redzēt, kā uz to reaģē citi cilvēki.
          </p>
        </>
      ),
      en: (
        <>
          <p>
            Like many other kids, I wasnt really interested of thinking ahead in life, I just wanted to do the things that seemed
            interesting to me. Most of the time that would be playing games games on the computer, watching cartoons, playing with actions
            figures, and going outside with my friends.
          </p>
          <p>
            I got introduced to a new interesting thing some time close to 2nd grade, when I asked my dad how websites work. He had taken
            something similar to a web design course a few years back, as his first jobs were art/design related, so he showed me some basic{' '}
            <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>. I was blown away, I could type something and it would just show up on the
            screen, I could even put pictures there and change them when i put my cursor around them. I really wanted to learn more.
          </p>
          <p>
            I ended up making a very basic website, and printing the source <a href="https://en.wikipedia.org/wiki/HTML">HTML</a> on a piece
            of paper, so I could show it to my friends in school. Looking back, it was nothing special, but for a kid in second grade it was
            definitely not a common occurence and I definitely got a kick out of seeing how other people reacted to it.
          </p>
        </>
      ),
    },
    image: (
      <svg viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="childhood">
          <rect id="Rectangle 48" x="42.5" y="23.5" width="54" height="53" rx="2.5" />
          <rect id="Rectangle 49" x="11.5" y="77.5" width="54" height="53" rx="2.5" />
          <rect id="Rectangle 50" x="76.5" y="77.5" width="54" height="53" rx="2.5" />
          <path
            id="A"
            d="M29.7003 120V121H30.4064L30.6427 120.335L29.7003 120ZM26.0071 120L25.0684 119.655L24.5746 121H26.0071V120ZM36.6889 90.9091V89.9091H35.9908L35.7502 90.5644L36.6889 90.9091ZM40.3253 90.9091L41.264 90.5644L41.0234 89.9091H40.3253V90.9091ZM51.0071 120V121H52.4396L51.9458 119.655L51.0071 120ZM47.3139 120L46.3715 120.335L46.6078 121H47.3139V120ZM38.6207 95.5114L39.5631 95.1768L39.3269 94.5114H38.6207V95.5114ZM38.3935 95.5114V94.5114H37.6873L37.4511 95.1768L38.3935 95.5114ZM31.0639 108.636V107.636H30.0639V108.636H31.0639ZM45.9503 108.636H46.9503V107.636H45.9503V108.636ZM45.9503 111.761V112.761H46.9503V111.761H45.9503ZM31.0639 111.761H30.0639V112.761H31.0639V111.761ZM29.7003 119H26.0071V121H29.7003V119ZM26.9458 120.345L37.6276 91.2538L35.7502 90.5644L25.0684 119.655L26.9458 120.345ZM36.6889 91.9091H40.3253V89.9091H36.6889V91.9091ZM39.3866 91.2538L50.0684 120.345L51.9458 119.655L41.264 90.5644L39.3866 91.2538ZM51.0071 119H47.3139V121H51.0071V119ZM48.2563 119.665L39.5631 95.1768L37.6784 95.8459L46.3715 120.335L48.2563 119.665ZM38.6207 94.5114H38.3935V96.5114H38.6207V94.5114ZM37.4511 95.1768L28.7579 119.665L30.6427 120.335L39.3358 95.8459L37.4511 95.1768ZM31.0639 109.636H45.9503V107.636H31.0639V109.636ZM44.9503 108.636V111.761H46.9503V108.636H44.9503ZM45.9503 110.761H31.0639V112.761H45.9503V110.761ZM32.0639 111.761V108.636H30.0639V111.761H32.0639Z"
          />
          <path
            id="C"
            d="M115.881 100V101H117.074L116.866 99.8255L115.881 100ZM112.358 100L111.379 100.201L111.543 101H112.358V100ZM111.265 97.3295L110.432 97.8843L110.437 97.8913L111.265 97.3295ZM109.39 95.3977L108.801 96.2065L108.807 96.2108L108.813 96.215L109.39 95.3977ZM106.961 94.2045L106.675 95.1629L106.675 95.1629L106.961 94.2045ZM99.3896 95.142L98.8611 94.2931L98.8585 94.2947L99.3896 95.142ZM95.9947 99.0767L95.0954 98.6393L95.0935 98.6433L95.9947 99.0767ZM95.9947 111.832L95.0934 112.266L95.0954 112.27L95.9947 111.832ZM99.3896 115.767L98.8585 116.614L98.8611 116.616L99.3896 115.767ZM106.961 116.705L106.675 115.746L106.675 115.746L106.961 116.705ZM109.39 115.526L109.971 116.339L109.973 116.338L109.39 115.526ZM111.265 113.58L110.434 113.023L110.433 113.025L111.265 113.58ZM112.358 110.909V109.909H111.545L111.379 110.706L112.358 110.909ZM115.881 110.909L116.866 111.085L117.075 109.909H115.881V110.909ZM114.432 114.901L113.573 114.388L113.573 114.388L114.432 114.901ZM111.819 117.898L112.434 118.686L112.439 118.682L111.819 117.898ZM108.31 119.759L107.998 118.808L107.996 118.809L108.31 119.759ZM97.5572 118.58L97.0257 119.427L97.0257 119.427L97.5572 118.58ZM92.9975 113.409L93.8935 112.965L93.8935 112.965L92.9975 113.409ZM92.9975 97.5L92.1016 97.0558L92.9975 97.5ZM108.31 91.1506L107.996 92.0999L107.998 92.1006L108.31 91.1506ZM111.819 93.0256L111.198 93.8099L111.203 93.8134L111.819 93.0256ZM114.432 96.0085L113.573 96.521L113.575 96.524L114.432 96.0085ZM115.881 99H112.358V101H115.881V99ZM113.338 99.7986C113.106 98.6713 112.695 97.6557 112.092 96.7678L110.437 97.8913C110.876 98.5375 111.194 99.3022 111.379 100.201L113.338 99.7986ZM112.097 96.7748C111.518 95.9074 110.807 95.1738 109.966 94.5805L108.813 96.215C109.449 96.6634 109.988 97.2176 110.433 97.8842L112.097 96.7748ZM109.978 94.589C109.154 93.99 108.242 93.5427 107.246 93.2462L106.675 95.1629C107.46 95.3967 108.167 95.7449 108.801 96.2065L109.978 94.589ZM107.246 93.2462C106.26 92.9523 105.235 92.8068 104.176 92.8068V94.8068C105.05 94.8068 105.881 94.9265 106.675 95.1629L107.246 93.2462ZM104.176 92.8068C102.237 92.8068 100.457 93.2996 98.8611 94.2931L99.918 95.991C101.182 95.2042 102.593 94.8068 104.176 94.8068V92.8068ZM98.8585 94.2947C97.2567 95.2985 96.0076 96.7637 95.0954 98.6393L96.894 99.5141C97.6674 97.9238 98.6815 96.7659 99.9206 95.9894L98.8585 94.2947ZM95.0935 98.6433C94.1782 100.547 93.7447 102.83 93.7447 105.455H95.7447C95.7447 103.041 96.1445 101.073 96.8959 99.5101L95.0935 98.6433ZM93.7447 105.455C93.7447 108.079 94.1782 110.362 95.0935 112.266L96.8959 111.399C96.1445 109.836 95.7447 107.868 95.7447 105.455H93.7447ZM95.0954 112.27C96.0076 114.145 97.2567 115.611 98.8585 116.614L99.9206 114.92C98.6815 114.143 97.6674 112.985 96.894 111.395L95.0954 112.27ZM98.8611 116.616C100.457 117.609 102.237 118.102 104.176 118.102V116.102C102.593 116.102 101.182 115.705 99.918 114.918L98.8611 116.616ZM104.176 118.102C105.235 118.102 106.26 117.957 107.246 117.663L106.675 115.746C105.881 115.983 105.05 116.102 104.176 116.102V118.102ZM107.246 117.663C108.238 117.367 109.148 116.927 109.971 116.339L108.808 114.712C108.172 115.166 107.463 115.511 106.675 115.746L107.246 117.663ZM109.973 116.338C110.811 115.736 111.519 115 112.097 114.134L110.433 113.025C109.987 113.693 109.446 114.254 108.806 114.713L109.973 116.338ZM112.095 114.137C112.694 113.243 113.105 112.23 113.337 111.112L111.379 110.706C111.195 111.595 110.876 112.363 110.434 113.023L112.095 114.137ZM112.358 111.909H115.881V109.909H112.358V111.909ZM114.897 110.734C114.65 112.114 114.206 113.328 113.573 114.388L115.291 115.413C116.06 114.125 116.581 112.678 116.866 111.085L114.897 110.734ZM113.573 114.388C112.933 115.461 112.142 116.367 111.198 117.113L112.439 118.682C113.579 117.781 114.53 116.688 115.291 115.413L113.573 114.388ZM111.203 117.11C110.255 117.851 109.189 118.417 107.998 118.808L108.622 120.709C110.026 120.248 111.299 119.574 112.434 118.686L111.203 117.11ZM107.996 118.809C106.817 119.199 105.546 119.398 104.176 119.398V121.398C105.742 121.398 107.227 121.17 108.624 120.708L107.996 118.809ZM104.176 119.398C101.866 119.398 99.8473 118.836 98.0887 117.732L97.0257 119.427C99.1307 120.747 101.525 121.398 104.176 121.398V119.398ZM98.0887 117.732C96.3277 116.628 94.9274 115.05 93.8935 112.965L92.1016 113.853C93.2836 116.237 94.923 118.107 97.0257 119.427L98.0887 117.732ZM93.8935 112.965C92.8679 110.896 92.3356 108.403 92.3356 105.455H90.3356C90.3356 108.642 90.9112 111.452 92.1016 113.853L93.8935 112.965ZM92.3356 105.455C92.3356 102.506 92.8679 100.013 93.8935 97.9442L92.1016 97.0558C90.9112 99.4568 90.3356 102.267 90.3356 105.455H92.3356ZM93.8935 97.9442C94.9274 95.8586 96.3277 94.2815 98.0887 93.1766L97.0257 91.4825C94.923 92.8018 93.2836 94.6717 92.1016 97.0558L93.8935 97.9442ZM98.0887 93.1766C99.8473 92.0732 101.866 91.5114 104.176 91.5114V89.5114C101.525 89.5114 99.1307 90.1617 97.0257 91.4825L98.0887 93.1766ZM104.176 91.5114C105.546 91.5114 106.817 91.71 107.996 92.0999L108.624 90.2012C107.227 89.7389 105.742 89.5114 104.176 89.5114V91.5114ZM107.998 92.1006C109.187 92.4911 110.251 93.061 111.198 93.8099L112.439 92.2412C111.302 91.3424 110.028 90.6623 108.622 90.2005L107.998 92.1006ZM111.203 93.8134C112.144 94.5492 112.934 95.449 113.573 96.521L115.291 95.4961C114.529 94.2195 113.577 93.1308 112.434 92.2378L111.203 93.8134ZM113.575 96.524C114.206 97.5723 114.65 98.7847 114.896 100.174L116.866 99.8255C116.582 98.2229 116.06 96.7743 115.289 95.493L113.575 96.524Z"
          />
          <path
            id="B"
            d="M60.0149 66H59.0149V67H60.0149V66ZM60.0149 36.9091V35.9091H59.0149V36.9091H60.0149ZM75.1996 37.9602L74.7296 38.8429L74.7346 38.8456L75.1996 37.9602ZM78.1399 40.7585L77.2631 41.2394L77.2648 41.2424L78.1399 40.7585ZM78.4382 47.733L77.5607 47.2534L77.5564 47.2613L78.4382 47.733ZM76.7053 49.6648L76.1556 48.8293L76.1506 48.8327L76.7053 49.6648ZM74.3899 50.7159L74.1268 49.7511L73.3899 49.9521V50.7159H74.3899ZM74.3899 51H73.3899V51.9382L74.3262 51.998L74.3899 51ZM77.0746 51.9375L76.5406 52.783L76.5406 52.783L77.0746 51.9375ZM79.2479 62.2074L80.117 62.702L80.117 62.702L79.2479 62.2074ZM76.1087 64.9773L75.6783 64.0746L75.6783 64.0746L76.1087 64.9773ZM63.5376 62.875H62.5376V63.875H63.5376V62.875ZM75.4268 61.5398L76.1045 62.2751L76.1048 62.2748L75.4268 61.5398ZM76.1371 55.5455L75.2779 56.0571L75.2804 56.0614L76.1371 55.5455ZM73.9922 53.5284L73.5096 54.4043L73.5165 54.408L73.9922 53.5284ZM63.5376 52.7614V51.7614H62.5376V52.7614H63.5376ZM63.5376 49.6932H62.5376V50.6932H63.5376V49.6932ZM72.9411 49.0682L72.5057 48.1679L72.5018 48.1698L72.9411 49.0682ZM74.9865 47.3068L74.1576 46.7473L74.1529 46.7545L74.9865 47.3068ZM74.4183 41.3835L73.7075 42.0869L73.7112 42.0906L74.4183 41.3835ZM63.5376 40.0341V39.0341H62.5376V40.0341H63.5376ZM61.0149 66V36.9091H59.0149V66H61.0149ZM60.0149 37.9091H70.1854V35.9091H60.0149V37.9091ZM70.1854 37.9091C72.1041 37.9091 73.6006 38.2418 74.7296 38.8429L75.6695 37.0775C74.166 36.2771 72.3196 35.9091 70.1854 35.9091V37.9091ZM74.7346 38.8456C75.8968 39.4559 76.724 40.2562 77.2631 41.2394L79.0167 40.2777C78.268 38.9123 77.135 37.8471 75.6645 37.0749L74.7346 38.8456ZM77.2648 41.2424C77.8213 42.2491 78.1058 43.3734 78.1058 44.6364H80.1058C80.1058 43.0584 79.7464 41.5975 79.0151 40.2747L77.2648 41.2424ZM78.1058 44.6364C78.1058 45.7745 77.9024 46.6282 77.5607 47.2534L79.3157 48.2125C79.8642 47.2089 80.1058 45.9982 80.1058 44.6364H78.1058ZM77.5564 47.2613C77.1936 47.9395 76.726 48.4541 76.1556 48.8294L77.2549 50.5002C78.1239 49.9285 78.8116 49.1551 79.32 48.2046L77.5564 47.2613ZM76.1506 48.8327C75.5308 49.2459 74.8577 49.5518 74.1268 49.7511L74.653 51.6807C75.5888 51.4255 76.4592 51.0306 77.26 50.4968L76.1506 48.8327ZM73.3899 50.7159V51H75.3899V50.7159H73.3899ZM74.3262 51.998C75.0199 52.0422 75.7552 52.287 76.5406 52.783L77.6086 51.092C76.5947 50.4517 75.5403 50.0714 74.4536 50.002L74.3262 51.998ZM76.5406 52.783C77.2826 53.2517 77.9279 53.9371 78.4649 54.8768L80.2013 53.8845C79.5262 52.7031 78.6658 51.7597 77.6086 51.092L76.5406 52.783ZM78.4649 54.8768C78.9651 55.7523 79.2422 56.8688 79.2422 58.2727H81.2422C81.2422 56.6085 80.9132 55.1303 80.2013 53.8845L78.4649 54.8768ZM79.2422 58.2727C79.2422 59.5734 78.9484 60.7118 78.3788 61.7128L80.117 62.702C80.8731 61.3734 81.2422 59.8888 81.2422 58.2727H79.2422ZM78.3788 61.7128C77.8343 62.6694 76.9581 63.4644 75.6783 64.0746L76.5391 65.8799C78.1191 65.1265 79.3357 64.0749 80.117 62.702L78.3788 61.7128ZM75.6783 64.0746C74.429 64.6703 72.7306 65 70.5263 65V67C72.9053 67 74.9284 66.6479 76.5391 65.8799L75.6783 64.0746ZM70.5263 65H60.0149V67H70.5263V65ZM63.5376 63.875H70.5263V61.875H63.5376V63.875ZM70.5263 63.875C72.906 63.875 74.8575 63.4243 76.1045 62.2751L74.7492 60.8044C74.0644 61.4355 72.7489 61.875 70.5263 61.875V63.875ZM76.1048 62.2748C77.2767 61.194 77.8899 59.8421 77.8899 58.2727H75.8899C75.8899 59.2601 75.5278 60.0863 74.7489 60.8047L76.1048 62.2748ZM77.8899 58.2727C77.8899 57.1084 77.5906 56.0206 76.9937 55.0295L75.2804 56.0614C75.6873 56.7369 75.8899 57.4673 75.8899 58.2727H77.8899ZM76.9963 55.0338C76.3951 54.0243 75.5422 53.2298 74.4679 52.6488L73.5165 54.408C74.2983 54.8308 74.8753 55.381 75.2779 56.0571L76.9963 55.0338ZM74.4748 52.6526C73.3723 52.0451 72.1012 51.7614 70.6967 51.7614V53.7614C71.8302 53.7614 72.756 53.989 73.5096 54.4042L74.4748 52.6526ZM70.6967 51.7614H63.5376V53.7614H70.6967V51.7614ZM62.5376 52.7614V62.875H64.5376V52.7614H62.5376ZM63.5376 50.6932H70.0717V48.6932H63.5376V50.6932ZM70.0717 50.6932C71.2664 50.6932 72.3758 50.4576 73.3803 49.9666L72.5018 48.1698C71.8017 48.5121 70.9982 48.6932 70.0717 48.6932V50.6932ZM73.3764 49.9685C74.3907 49.478 75.2138 48.7744 75.8202 47.8591L74.1529 46.7545C73.7555 47.3544 73.2149 47.825 72.5057 48.1679L73.3764 49.9685ZM75.8154 47.8663C76.4513 46.9242 76.7536 45.8339 76.7536 44.6364H74.7536C74.7536 45.4843 74.5445 46.1743 74.1577 46.7473L75.8154 47.8663ZM76.7536 44.6364C76.7536 43.0974 76.2064 41.7573 75.1254 40.6764L73.7112 42.0906C74.4106 42.79 74.7536 43.6185 74.7536 44.6364H76.7536ZM75.1292 40.6802C73.9723 39.511 72.2461 39.0341 70.1854 39.0341V41.0341C71.9883 41.0341 73.084 41.4568 73.7075 42.0869L75.1292 40.6802ZM70.1854 39.0341H63.5376V41.0341H70.1854V39.0341ZM62.5376 40.0341V49.6932H64.5376V40.0341H62.5376Z"
          />
        </g>
      </svg>
    ),
  },
  {
    id: 'highschool',
    title: { lv: 'Vidusskola', en: 'High school' },
    content: {
      lv: (
        <>
          <p>
            Vidusskola bija pirmā reize manā dzīvē, kad skolotājs man tiešajā mācīja kaut ko saistītu ar programmēšanu, lai gan tā bija ļoti
            vienkārša stunda, man tā patika. Iespēja uzdot jautājumus un uzreiz saņemt atbildes bija pārsteidzoši laba situācija. Kursā man
            mācīja tikai programmēšanas pamatus, bet, tā kā skolotāja pamanīja, ka es jau pārzinu šīs tēmas, viņa laiku pa laikam piedāvāja
            man izpildīt sarežģītākus uzdevumus no iepriekšējo gadu IT olimpiādēm, vai arī ja to nevēlējos darīt bija iespēja ātrāk tikt
            prom to stundas, kas arī man patika.
          </p>
          <p>
            Reiz es piedalījos pilsētas mēroga olimpiādē, bet man neveicās pārāk labi. Mani interesēja pats sacensību aspekts, bet veids, kā
            tas notika, kā jāpielieto savas prasmes (jāstrādā ļoti ātri un lielākoties jārisina pilnīgi nepraktiski uzdevumi), man nebija
            pārak saistošs. Vismaz es uzzināju kaut ko tādu, ko es nevēlos darīt nākotnē, vismaz konkrēti ar tik stingru laika limitācijas
            aspektu, jo man likās tas pārāk ietekmēja gala rezultātu.
          </p>
        </>
      ),
      en: (
        <>
          <p>
            High school was the first time in my life that I had actually been taught anything programming related by a teacher in person,
            even though it was very basic I enjoyed it a lot. The opportunity to ask questions and receive answers instantly was a game
            changer. The course only taught me programming basics, but since my teacher noticed I was already familiar with the topics, she
            would occasionaly offer me more challening tasks to complete from prior year IT olympiads.
          </p>
          <p>
            I participated in a city-wide olympiad once, but I did not do very well. I was interested in the competition aspect but the way
            that you had to apply your skills (work very fast and mostly solve completely impractical tasks) wasn't very interesting to me.
            At least I found out something that I don't want to do in the future, at least with the very strict time limit aspect, as it
            seemed to influence the final result too much.
          </p>
        </>
      ),
    },
    image: (
      <svg viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="high school">
          <path
            id="Ellipse 6"
            d="M55.5 79.5C55.5 91.63 45.2233 101.5 32.5 101.5C19.7767 101.5 9.5 91.63 9.5 79.5C9.5 67.37 19.7767 57.5 32.5 57.5C45.2233 57.5 55.5 67.37 55.5 79.5Z"
          />
          <path
            id="Ellipse 7"
            d="M118.5 79.5C118.5 91.63 108.223 101.5 95.5 101.5C82.7767 101.5 72.5 91.63 72.5 79.5C72.5 67.37 82.7767 57.5 95.5 57.5C108.223 57.5 118.5 67.37 118.5 79.5Z"
          />
          <path id="Vector 4" d="M55 83C57.6667 79.8333 65 75.4 73 83" />
          <path id="Vector 5" d="M25 58.5L59 22.5C60.5 20.8334 64.5 19 68.5 25" />
          <path id="Vector 6" d="M118 75L124 32.5C124.333 30.1667 125.5 27.1 127.5 33.5" />
        </g>
      </svg>
    ),
  },
  {
    id: 'uni',
    title: { lv: 'Universitāte', en: 'University' },
    content: {
      lv: (
        <>
          <p>
            Pēc vidusskolas beigšanas es biju pārliecināts, ka vēlos turpināt studēt IT, taču man vēl bija dažas citas idejas. Es apsvēru
            arhitektūru, kā arī mašīnbūvi, bet nolēmu izvēlēties IT, jo man jau bija zināma pieredze šajā jomā.
          </p>
          <p>
            Arī došanās uz Latvijas Universitāti tobrīd nebija īsti pārliecināta izvēle. Es biju ļoti skeptiski noskaņots attiecībā uz
            pārcelšanos no manas pilsētas, jo nebiju cilvēks, kas daudz ceļo, un arī mājās man bija universitāte (
            <a href="https://va.lv/lv">VA</a>), kurā bija IT programma. Pēc pārdomām es nolēmu, ka pārceltiessos uz Rīgu, jo tur bija vairāk
            izaugsmes iespēju un vairāk darba iespēju nākotnē. Apsvēru arī iespēju iestāties <a href="https://www.rtu.lv/">RTU</a>, bet,
            izlasījis dažas atsauksmes par to internetā, pamanīju, ka daudzi cilvēki pieminēja, ka viņu kursi ir novecojuši, kas man kā
            vienīgo reālo opciju atstāja tikai Latvijas Universitāti.
          </p>
          <p>
            Šobrīd, pēc trīs gadiem pēc bakalaura programmā, es varu teikt, ka esmu ļoti apmierināts ar savu izvēli. Esmu iemācījies daudz
            jauna lietu, esmu iepazinis daudz jaunu cilvēku un guvis personīgu izaugusmi. Palikšana dzimtajā pilsētā noteikti nebūtu bijusi
            laba ideja, un arī no tā, ko esmu dzirdējis no draugiem, kuri mācās <a href="https://www.rtu.lv/">RTU</a>, es esmu diezgan
            apmierināts ar savu universitātes izvēli.
          </p>
        </>
      ),
      en: (
        <>
          <p>
            After finishing high school I was mostly certain that I want to continue studying IT, but I still had some other options in
            mind. I was considering architecture, as well as mechanical engineering but I decided to go with IT since I already had some
            experience with it.
          </p>
          <p>
            Going to the University of Latvia also wasn't very certain at that point in time. I was very skeptical about moving out of my
            hometown as I wasn't really a person who traveled much and I also ahd a university (<a href="https://va.lv/en">VA</a>) back home
            that offered an IT program. After consideration I decided that I would be moving to Riga as it had more opportunities to grow
            and more job options in the future. I was also considering enrolling in <a href="https://www.rtu.lv/en">RTU</a>, but after
            reading some reviews about it online, noticed a lot of people were saying that their course is outdated, which only left me with
            the University of Latvia as a real option.
          </p>
          <p>
            At this point, 3 years into my Bachelor's degree, I can say that I am very happy with my choice. I have learned a lot of new
            things, met a lot of new people and have grown as a person. Staying in my hometown would have definitely not been a good idea,
            and also from what I've heard from friends that attend <a href="https://www.rtu.lv/en">RTU</a>, I'm pretty happy with my choice
            of university.
          </p>
        </>
      ),
    },
    image: (
      <svg viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="university">
          <path
            id="Ellipse 8"
            d="M113.5 75C113.5 76.3894 112.449 77.8373 110.234 79.2493C108.043 80.6463 104.839 81.923 100.836 83.0025C92.8366 85.1597 81.7574 86.5 69.5 86.5C57.2426 86.5 46.1634 85.1597 38.1639 83.0025C34.1606 81.923 30.9569 80.6463 28.7658 79.2493C26.5511 77.8373 25.5 76.3894 25.5 75C25.5 73.6106 26.5511 72.1627 28.7658 70.7507C30.9569 69.3537 34.1606 68.077 38.1639 66.9975C46.1634 64.8403 57.2426 63.5 69.5 63.5C81.7574 63.5 92.8366 64.8403 100.836 66.9975C104.839 68.077 108.043 69.3537 110.234 70.7507C112.449 72.1627 113.5 73.6106 113.5 75Z"
          />
          <line id="Line 6" x1="25.5" y1="75" x2="25.5" y2="48" />
          <line id="Line 7" x1="113.5" y1="75" x2="113.5" y2="48" />
          <path id="Vector 7" d="M25.5 48.5C37.3333 41.1666 71.5 30.9 113.5 48.5" />
          <path id="Vector 8" d="M25.5 59.5L11.5 46L70.5 5L129 46L113.5 60" />
          <line id="Line 8" x1="11.5" y1="46" x2="11.5" y2="87" />
          <circle id="Ellipse 9" cx="12" cy="89" r="2.5" />
          <path
            id="Vector 9"
            d="M9.50004 89.5C7.6667 91.8333 4.60004 96.8 7.00004 98C9.40004 99.2 14 98.8333 16 98.5C17.8333 98.1667 20.1 95.9 14.5 89.5"
          />
        </g>
      </svg>
    ),
  },
  {
    id: 'routine',
    title: { lv: 'Rīta rutīna', en: 'Morning routine' },
    content: {
      lv: (
        <>
          <p>
            Tagad pārejam uz burtisko ceļu uz LU. Pirmais solis parasti ir pamošanās. Es parasti pamostos vēlu, salīdzinot ar laiku, kad
            vajadzētu, kas parasti nozīmē ap pulksten 10 rītā, tāpēc katru semestri man ir jālūdzas, lai man nebūtu daudz priekšmetu, kas
            sākas 8:30, un nozīmētu, ka jāceļas ap 7:30 vai 7:00, un, lai arī kā es censtos, rīta nodarbības tomēr ir.
          </p>
          <p>
            No rīta pamostoties pie pus-samaņas, es aizklupju līdz virtuvei, uzlieku tējkannu, aizstaigāju līdz vannas istabai iztīrīt zobus
            un atkal atpakaļ uz virtuvi, lai pagatavotu sev tasi kafijas vai varbūt tējas, ja jūtos izteikti izsmalcināti. Pēc tam ar kafiju
            rokā es dažas minūtes vienkārši skatos uz sienu vai griestiem un mēģinu pierunāt smadzenes pamosties.
          </p>
          <p>
            Tad ir pienācis laiks kārtīgi saģērbties, uzvelku kreklu un džinsu bikses, sakrāmēju mantas mugursomā un dodos ārā. Man patīk
            staigāt ar kājām, jo tas nav tik tālu, un jo īpaši gada siltajā laikā vienkārši pastaigas, izbaudot saulīti, ir patīkams prieks,
            patīkams veids, kā pamosties.
          </p>
        </>
      ),
      en: (
        <>
          <p>
            Now moving on to the literal road to LU. The first step usually is waking up. I tend to wake up late relatively to when I
            should, which is usually around 10am, so every semester I have to pray that I dont have many 8:30 classes which would require me
            getting up at around 7:30 or 7 am, and no matter my efforts, the morning classes are still there.
          </p>
          <p>
            After waking up in the morning barely conscious I stumble my way to the kitchen, put the kettle on, stumble to the bathroom and
            brush my teeth, and stumble once again to the kitchen to make myself a nice cup of coffee or maybe some tea if I'm feeling
            particularly fancy that morning. Then, coffee in hand, I spend a few minutes just staring at a wall or the ceiling trying to
            bribe my brain to wake up.
          </p>
          <p>
            Then it's time to get properly dressed, I put on a nice shirt and some jeans, pack my stuff in my backpack and head out. I like
            walking since it's not that far, and especially in the warm times of the year just walking around basking in the sunshine is a
            nice way to wake up.
          </p>
        </>
      ),
    },
    image: (
      <svg viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="morning routine">
          <path
            id="Ellipse 10"
            d="M98.5 42C98.5 46.1148 94.9907 49.9882 88.9726 52.8625C82.9913 55.7193 74.6931 57.5 65.5 57.5C56.3069 57.5 48.0087 55.7193 42.0274 52.8625C36.0093 49.9882 32.5 46.1148 32.5 42C32.5 37.8852 36.0093 34.0118 42.0274 31.1375C48.0087 28.2807 56.3069 26.5 65.5 26.5C74.6931 26.5 82.9913 28.2807 88.9726 31.1375C94.9907 34.0118 98.5 37.8852 98.5 42Z"
          />
          <path id="Vector 10" d="M32.5 41.5L32 108.412C42.1429 116.402 70.6571 127.588 96.7143 108.412L98.5 42" />
          <path id="Vector 11" d="M98 50C104.333 51 113.4 62.4 97 98" />
          <path id="Vector 12" d="M98.5 45C108 45 126 59.5 96.5 108.5" />
        </g>
      </svg>
    ),
  },
  {
    id: 'walk',
    title: { lv: 'Pastaiga', en: 'The walk' },
    content: {
      lv: (
        <>
          <p>
            Gājiens uz universitāti <i>parasti</i> ir diezgan neinteresants. Es nedzīvoju pārāk tālu no pilsētas centra, tāpēc lielākā daļa
            no pastaigas ir tikai gājiens pa vienu garu līkumainu ceļu. Tomēr atkarībā no dienas laika ainava noteikti pamainās.
          </p>
          <p>
            Ja man ir jātiek uz agrajām rīta stundām, pirmais, ko parasti redzu, izejot no mājas, ir milzīgs sastrēgums uz manas ielas, kas
            parasti ietver arī cilvēkus, kuri kliedz, pīpina un vispārīgi uzvedas kā agrie rīta braucēji. Kad nokļūstu centrā, ir
            pārsteidzoši kluss, tikai daži cilvēki staigā apkārt, automašīnas ir samērā neregulāras, bet kopumā nav pārāk slikti.
          </p>
          <p>
            Ja jātiek uz vēlākajām nodarbībām, sastrēgumu pie manas mājas parasti nav, bet centrā ir daudz vairāk. Arī sastrēgums pārceļas
            no ielas blakus manai mājai uz lielo krustojumu, kas ved mani uz universitātes ceļu. Māšinas, kas stāv uz gājēju pārejām, sēžot
            satiksmē, ir viena no lietām kas mani notracina šajās dienas vidus pastaigās.
          </p>
          <p>
            Izejot vakarā parasti ir labākais laiks pastaigām, jo centrs ir ļoti aktīvs, cilvēki staigā apkārt, bet manā pilsētas daļā nav
            tik daudz kustības, arī cilvēki, kas dodas no darba, parasti izvēlas braukt pa piekrastes ceļiem, kas atstāj manu rajonu
            salīdzinoši mierīgu, tāpēc man patīk. Nevaru teikt, ka man patīk vakarā doties uz universitāti, bet vismaz pastaiga ir
            izbaudāma.
          </p>
        </>
      ),
      en: (
        <>
          <p>
            The walk to university <i>usually</i> is a prettys straight forward one. I don't live very far from the city center so most of
            the walk is just going down one long windy road. Depending on the time of day though, the scenery definitely changes a bit.
          </p>
          <p>
            If it's the early morning classes I have to get to, the first thing I usually see when I walk out of my house is a huge traffic
            jam on my street, which also usually involves people shouting, honking and just generally being early morning commuters. When I
            get to the center though, it's surprisingly quiet, with only a few people walking around, cars are somewhat regular but overall
            it's not too bad.
          </p>
          <p>
            If it's the later classes I have to get to, the traffic jam next to my house usually isn't there, but the center is a lot more
            active. Also the traffic jam moves from the street next to mine to the big intersection that leads me to the university road.
            Cars parked on the pedestrian crossings while sitting in traffic have a way of annoying me on my walks.
          </p>
          <p>
            Going out in the evening is usually the best time to walk, as the center is very active, with people walking around, but my part
            of town doesn't see that much action, people leaving their work usually prefer to take the coastal commute which leaves my area
            relatively peaceful, so I enjoy it, not that I enjoy going to the university in the evening, but at least the walk is nice.
          </p>
        </>
      ),
    },
    image: (
      <svg viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="the walk">
          <path
            id="Vector 15"
            d="M47.9112 105L55.9202 107.732C56.1871 110.073 55.7876 112.468 54.675 114.366C53.0733 117.098 46.2657 119.439 45.0644 112.024C44.7006 109.779 45.909 107.341 47.9112 105Z"
          />
          <path
            id="Vector 16"
            d="M55.9682 105L48.5487 102.68C46.9867 93.7852 48.6268 83.1118 55.1872 82.1836C63.3876 81.0235 62.997 85.6641 62.997 87.5977C62.997 90.5163 59.4826 100.23 55.9682 105Z"
          />
          <path
            id="Vector 17"
            d="M83.9426 90.1529L75.8585 91.1203C75.0999 93.3576 74.9529 95.79 75.581 97.8867C76.4853 100.905 82.3431 104.653 85.0783 97.6437C85.9064 95.5215 85.3062 92.8746 83.9426 90.1529Z"
          />
          <path
            id="Vector 18"
            d="M75.7441 88.2821L83.3689 87.6117C86.8178 79.1585 87.5859 68.2453 81.4976 65.8917C73.8872 62.9496 73.2439 67.6238 72.8198 69.5358C72.1797 72.4218 73.4196 82.7966 75.7441 88.2821Z"
          />
          <path
            id="Vector 23"
            d="M49.5572 56.6496L57.4064 59.8113C57.5461 62.1637 57.0173 64.5338 55.8036 66.3682C54.0562 69.0091 47.1317 70.9782 46.3339 63.5094C46.0924 61.248 47.4311 58.8791 49.5572 56.6496Z"
          />
          <path
            id="Vector 24"
            d="M57.6023 57.0862L50.3195 54.3673C49.2418 45.4012 51.4579 34.8323 58.0589 34.2611C66.3101 33.547 65.6687 38.1596 65.5639 40.0903C65.4057 43.0047 61.3701 52.5141 57.6023 57.0862Z"
          />
          <path
            id="Vector 25"
            d="M85.9298 45.6241L77.8188 44.9183C76.6187 46.9533 75.9776 49.3042 76.1637 51.4851C76.4318 54.6249 81.3997 59.4907 85.5101 53.1889C86.7547 51.2808 86.7082 48.5672 85.9298 45.6241Z"
          />
          <path
            id="Vector 26"
            d="M78.287 42.1166L85.8878 43.0192C90.9921 35.4497 93.9752 24.9241 88.4967 21.3754C81.6485 16.9395 80.0632 21.3835 79.2572 23.1684C78.0405 25.8625 77.1331 36.2717 78.287 42.1166Z"
          />
        </g>
      </svg>
    ),
  },
  {
    id: 'bus15',
    title: { lv: '15. trolejbuss', en: 'Bus #15' },
    content: {
      lv: (
        <>
          <p>
            Dažreiz es pamostos īpaši vēlu, un pat īsa pastaiga līdz universitātei būtu pietiekama, lai es nokavētu nodarbības, tāpēc man ir
            jāvēršās pie citiem līdzekļiem - trolejbusa, kas mani aizved tieši uz universitāti - slavēnā 15. trtolejbusa.
          </p>
          <p>
            Vēl pirms pārcelšanās uz Rīgu par to biju dzirdējis vairākus stāstus, ka tas ir pilns ar dīvainīšiem, zagļiem un tamlīdzīgiem
            radījumiem. Pirmās pāris reizes braucot ar to, es īsti nesapratu visu šo burzmu, tas bija vienkārši autobuss, bet aptuveni
            piektajā braucienā, kad atgriezos mājās, pamanīju, ka manas mugursomas rāvējslēdzējs ir atvērts, esmu diezgan pārliecināts, ka
            pirms tam to neatvēru, bet vienīgais, ko tas iekšpusē bija džemperis, un tas tur joprojām bija. Līdz pat šai dienai es īsti
            nezinu, kas notika, bet es noteikti kļuvu uzmanīgāks braucot sabiedriskajā transportā
          </p>
          <p>
            Vēl viena lieta, ko es pamanīju bija, ka cilvēkiem nepatīk ievērot noteikumus. Es sāku studijas universitātē un pārcēlos uz Rīgu
            tieši tad, kad sākās COVID-19 pandēmija, bija masku mandāts. Cilvēkiem šajā autobusā patiešām bija vienalga. Man tas šķita
            kaitinoši, bet nedomāju, ka es varu kaut ko pateikt vietējām babušķām, lai viņas mainītu savu viedokli par situāciju. Vienu
            dienu tur bija tipiskaā omīte, kas vienkārši sēdēja bez maskas un runāja pa telefonu, viņai blakus stāvēja puisis. Puisis
            vairākas reizes lūdza viņai uzvilkt masku, bet viņa atteicās, tad puisis kartīgi iepļaukāja viņai pa seju. un izkāpa nākamajā
            pieturā, bija smieklīgi redzēt, cik daudz cilvēku nolēma uzlikt maskas atlikušajai brauciena daļai, kamēr es tur biju.
          </p>
          <p>
            Man nav pārāk daudz dīvainu stāstu par šo autobusu, bet tie, kas ir, ir pietiekams iemesls, lai es to lietotu tikai kā pēdējo
            izvēli. Arī, tas parasti ir ļoti pārpildīts, tāpēc visu braucienu jāstāv plecu pie pleca.
          </p>
        </>
      ),
      en: (
        <>
          <p>
            Sometimes I wake up especially late and even the short walk to the university would be enough for me to miss class, so I have to
            resort to other means - the bus that takes me straight to university - the infamous trolly #15.
          </p>
          <p>
            I had heard a few stories about it before I even moved to Riga, that it was full of weirdos, thieves and the like. The first few
            times riding on it I didn't really understand all the commotion, it was just a bus, but on approximitely my 5th ever ride, when
            I got back home I noticed the zip on my backpack was open, I'm pretty sure I didn't open it beforehand, but the only thing it
            had inside was a hoodie and that was still there. To this day I don't really know what happened but I did become more careful in
            public transport as a result
          </p>
          <p>
            Another thing I noticed was that people really don't like following rules. I started university and moved to Riga right as the
            COVID-19 panedmic was kicking off, so there was a mask mandate happening. People on that bus really didn't care. I found it
            annoying but didn't think there's really anything I could say to the local babushkas to make them change their mind on the
            situation. One day, however, there was a typical babushka just sitting without her mask talking on the phone, and a guy standing
            next to her. The guy asked her to put on her mask several times, but she refused, the guy then proceeded to slap her in the face
            and get off at the next stop, it was funny seenig how many people decided to put on their masks for the rest of the journey
            while I was there.
          </p>
          <p>
            I don't have that many weird stories about the bus, but I do have a few which is enough of a reason for me to only take it as a
            last resort. Oh, and it's usually very crowded so you have to stand shoulder to shoulder for the whole ride.
          </p>
        </>
      ),
    },
    image: (
      <svg viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="bus 15">
          <circle id="Ellipse 11" cx="32.5" cy="94.5" r="11" />
          <circle id="Ellipse 12" cx="90.5" cy="94.5" r="11" />
          <circle id="Ellipse 13" cx="90.5" cy="94.5" r="7" />
          <circle id="Ellipse 14" cx="32.5" cy="94.5" r="7" />
          <line id="Line 9" x1="43" y1="94.5" x2="80" y2="94.5" />
          <path
            id="Vector 13"
            d="M101.5 94.5H124V55C124.333 49.8333 123.1 39.5 115.5 39.5C107.9 39.5 53 39.5 26.5 39.5C23.5 39.3333 17.5 41 17.5 49C17.5 57 17.5 61.8333 17.5 63.5C13.1667 63.6667 4.5 66.1 4.5 72.5C4.5 78.9 4.5 90.1667 4.5 94.5H21.5"
          />
          <path id="Vector 14" d="M17.5 63.5H29.5V50.5H17.5" />
          <rect id="Rectangle 51" x="35.5" y="50.5" width="19" height="13" />
          <rect id="Rectangle 52" x="59.5" y="50.5" width="19" height="13" />
          <rect id="Rectangle 53" x="83.5" y="50.5" width="19" height="13" />
        </g>
      </svg>
    ),
  },
];
