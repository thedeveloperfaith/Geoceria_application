import React from 'react'
import './Stores.css'
import Button from "../Components/Button"

const Stores = () => {
  return (
     <div className='detailed_page_section'>
      <section className='green_section'>
          <div className='paragraph_section'>
               <p>Designed by Faith<br/>
                  4.5 review
               </p>
          </div>
          <div className='box'>
               <div className='btn'> ^</div>
               <img src="data:image/webp;base64,UklGRpgMAABXRUJQVlA4IIwMAACwSQCdASqUAJQAPsVUn00npCKiK9fMMPAYiUAYsIabMW8u8aKUiiIcqrdtH/CbgFMeH+n7nkPBB0V0RnpR4bgnM8H6YNAjsqec6IWueXIOXxRUnUM0/BGplDOX4h15cdV+HOMTSH/MP1L8NizGDGN2czke51JOt5qd372egG5B1nYuP9oTzTykHZGLLHoeuw2R9w6IoBc1Gmi4Kz+t0KP0qgn4axG/SrtVJ5e/g9yr0HaMdFTrn/kWddvb40hSkUUEdFoumJ0SxUcQjiKeAfWVCCY2j3SN+m7kpzjkcNB/lYEPtbwnQpv/ooujRxXPOLPGQ1DWlpVVoURLH1F3dIw3EEDZvPBChdN9zyLQrAGGtrsGxhePM2dlUue9r8WC+hHOLButE9ir/W0FgARyiN63ayPSV5vntN3/7dCKRMJfCpG1yc6zZnLPjYlH6vaeIgnY9kd4qbcnEq9aq4D92/Btbo1ayTPq9RvILtecbp4eI8T1gcw3KbjjU62o0stgkGlrdRivfmXSQ++dc6ZbMrfw7vPJeUiZ5y9O15GpyTGD2wEhv1JaSmFfY9I1ZwIRv/eYsnMoZ77DRy176fQc/GUACy6GyqJ1LWVikdy7HM2xOGWjUUY6dxx1jc/GmgwlgoBC1tiL0MPcu6OqsHFeDaE2WBLskIvZYSG2guhuLnnwnXZSVBKfHhoJm+lhaA/rbTbBQtzDr3NH5QWCjcNe6luRCMr5IQkuVpwLUJgpow5VO9u3vZHHLlbrySC8PcJUhY8/3tqps9v57wCCcxLWH4hNhhvD3y0wAP7vLUro6xJkoMCqsP3xOPkwpzI9pvpZ73T6zyTy3T6HdlK8LJIVPqYK423Cb6R0YUqbw8Lnu6t/a2zQa4RUbs/H0zkuCi/oG72mGj+/TDHlycK201nXH0CVznotTA7gwBgdcosrTklEkNUJP8yZ/xu8LivCqNGeMTdmkn8ng7Mu1CKdOBG7v+w6SCqLO+8l98yomtmknyUa3LNQxVf4Rz3Iw23WYcH03oA9I1vc3mrXkJ8SirRBrtxYHpRxaLrL12YfQy9YYYaYk2RxXrEUWYIJY1QRrFx5X+uEYEjYGgVKHwYoCjAPHLl3LL6CKM9DgEm7M2xbr45XwV3egY6g0OxDl6m5kixs10iyb76NVPs7G2qbd0Blf8NsspRxov+e2/NaacWoDv/+VprQKKgP1yEGikpBNDwWU+zrWMlIw1XuUFn9k0nZUjWXx3zdA5mBlFwpwODO3Wzt7nXpoeXdOjfQI1971N7j+wI5GWvKa/oeehKmn5agvTmbvqX4Hcs+wCyYu3iUY9JctR4be1wkNMpNj+14278y+/wGCoXIk4b5T6F2j4vnajBn8P4ClYRc33xhx9oILtMvLqJ4hnmSFMrhm2z0XPqpZtm+Od4iGSBmbp4bI9DiOvDwgzNObs1EQtgIajL4V9MA+YZ80+qRH2bjkIy3z9jhaOeKb6zXHtyKcxpAF2Rjsy20/gk6xNGjeytdwVRLMJkWEt1IFvW04YJLU7QVYgKSQMDgZLWkJR0hhvyPsaRxv0B0UfYy53wpOXvIIdjW+E0FHuIoDMV8cltJsJnCYe2pccbxPL/NMKTu7iUyeOR7qJ00/9rDPO2Z9YqskmA7VMCVUrjh4AhrDKWQeBdhRwaRxcRq0oFlqxvdOggX3to+AVv2UYOqUSM5FK0CWBDFb0q1Dcgon77bRvcoa/Tz9ePOiwIeloJukKAUBxMDe78mJH52h+cMlFifI2XEvb6mE66w1k0f+Iu86u9a8Fi0VX7yvg8ACtt/G4OCp9wrQ+pdcXzMgZtGTiS1fJQPN0kquYJ+AN8y6fh48/0aulGcdYc3sJDo8WIoTuYgJJknabbDO9d43vWASIXNJgyE5+Ind0MRlKr1wsqFeXL8Qrwx225CPrRs8POXwDl05Bq/6R5lj90EgtgmaNVKAtL9mEqGcqesfRHjNxo39ApAvBV3vL3JqoC+KR1B9JlVsVlGRv1sv+225+7OJpWoSVa1l2K5kYjhO+waqDEjsdnYT8M828/tjQH3S+V5hKreF1eOUwoutaQN0eChulAGyNRF9DfBevmg+PVnJE1m374Om+8pumV4poNej3ig4mS47lOXKpDdc2EEHIumuVo4DVKtDomgwrXe0p2bLsw+GT0Yx0xlPbGLhFJALVvhOQf2FFY+YcZ1UT56/wWFSAhdBr2rOhCTXMwwAJLJTXotSlYKJr92oHya1aaPhT5/OcWP5kqdhr7PtUkUbCmZzj3bDCywN4xm3wGf9IXXZxps5hgHugqwKHFS7ar087pPdxY3FWJuXWahCnx0LArfqyFnj3CUkNlC4WNTzv97nft8tszQFdM+U4ZuGx/bUIZDOxCgV9B2KDRlYSxb5c+xdR23vJ0Mlw9Avrlfv1eA+65Um3HaF0e87LR66c2pmSrH9knrBSWNvpNXvGuO8PsDTBbqKMVnhGexv9cPZAKMWDA+w2ZO2H5RCBSx6WUgz4fpjBD6xZUabIraEXHYJB0YBuKXXfQc3qvktbmVT6B1Sx38igae99tJEtzBQCDRmQmHR3MKtb64xXWMKLqSGo52SAtX7sjdUWRrdbJMBiZbQgW34rsdAsRJNybVFFTzcSmU4gA8i9wYpriSGKclL+0EW5ET68pgbg9utGfl9Woff5yQdvRP+0rHk2BxruvwyBjCVy29xHKWXzIrnQXal6Xm59qvGRsKsuJ8AjNKPKKdq45prRllYVgF6AjU/xVI59NAVeqoQAxDA9sWWkw8Pq7ouj6uX+o95rEu+cqrB2HqcvMlODHXBYA8JDHvggIgvtmrOd3MvvJcv/JrPOskfiAfd81YuOZF3by+OOzafW8Xzda9SZoEeE+W/Diz0vVdDdYye0eV0xOEuquxirpLmARA0RRK5sBy7FPkOAPJC5+I/Kapk6jjfaMT44B5/xnhtDStQQ7nmpwtCkNfV+NcaxjzDDjrfcg/uPr7LzRZr3l/rrkmPB36uxi+GCtGoldknd2DLKAykeESsIwsGVFcNl+RCMzEffWtWNbkUUZz9KgBp0U5cc4lXfiEQR8RKpDfbQeTjHWrllMEsC4QU+NWLjjoSxDpDP3J2g4P+Te0ZzZvZ3nuOfSEJPENVtGDqxR30hoXoQIqM6j38CgUtGyFYCfxi/8ADvMfE4WPZ4mnV45Ef4h4Xtp8Cfyq7RMoaOKpnwVO1viPgpqiNRDhFIUve37EtECtBQkQJ/PCelrN8lI6ujzrSgRr1NgeHziuuDsrsQdwLeTkLpn+ihXE0oMNbveosZbM3YOiL3MyF2C4Okae/Mqmu5djR/ibgaF0jub5/rG8Rx9Xi3nUMqDBx5oxlC/+UHIjkuixrFyZaHHRT3JroeytAObeQi2ksZa8776L+Wus9dVOkuH9GmO05HWuUeBl93jYW0io1T1ZR+R2q5SJmaaCrkEckHWgV7II2srFzLB1KpW5QZluQkNNWeND25A5ke5u3i3beJq6wjxDokXASS5ReW9EEXbSFtyoPeYrn72f6UDw7Mj9E8thWCflKErbI5op/HeW9UGQNtFpTwrFEHZ5/PH30vvboMo7fwfziXjYe4lR4ss8WmKxaV+1+9MUv4AwUaNMK7gHVknXN3rf+QGbICnC5QMaPGz9I6cOpU4dOX+zCq2Rj6Xczj41pFRb1SuTPynB2KcLWq0qFzunKFQLaXC028rUbrXGYHOdBeB724r08jz6+OYdaXQMKVKrCF0N2kIM1QutEh4GiA9PASGCrXFauqcXH5z15i/2NMLU4aLWBh8/kvCYFc7w1UqMc7hAvrhDxHapIskAamkMPZAvowCO1TG5/kD09d4iY495aqEhGYbcW6lYfwrV0vCzch4Q0dsygwKk1Xj9290/WOX6HxiDhP/PUQeGmEL2KG7OAx/CGgEn1tm5UjSG0yy1hORjHIuKT+rnhtzT2EpVvvj/qg2KqgnKPcZio56UDfJex/ZvyFbiOOQ7Pkkx3nurZEyzD9EhCrybMKZTmMmkdhcFqnnRy+CMbXTMDcWQlcNUHcl4akyyVdGADXU4GIxxIvSMUGvDX4I9S4iQg//4P2vl7A0ZJJQwWjSOLPXkqR/IgrkY+VEuDrvGOxhbRzm8zyfaq4eQhxm5UDldH0fT8mNfcCdCsOzhG0H4rRT6wxw8ADb8+FlEs70kgGhn7DyF17I8UIx7KRvBbGLlCw5cjw2eHLBoqPw8md4dcTt8MPBPvRYDUkTLfM7zld+6k87KPWG1Rjx6I3OuEFAytdJAGjSGh/kwkwAAAA==" alt=""/>
               <div className='btn'> ^</div>
          </div>
      </section>

      <article className='White_section'>
        <div className='first'>
          <h2>Test Ega Lagi</h2>
          <p>item code:98</p>
          <p>Description</p>
          <h3>Test</h3>
        </div>
        <div className='second'>
          <p>PRICE</p>
          <span>$12</span>
          <p>color</p>
          <select name="" id="color-select">
            <option value="green"> Green</option>
            <option value="blue"> Blue</option>
            <option value="orange"> orange</option>
            <option value="purple"> purple</option>
          </select>
          {/* <input className='green_input' type="text" placeholder="Green"/> */}
          <p>Quantity</p>
          <div className='third'> 
            <select name="" id="quantity-select">
              <option value="one">01 </option>
              <option value="two"> 02</option>
              <option value="three"> 03</option>
              <option value="four"> 04</option>
              <option value="five">05 </option>
            </select>
            {/* <input className='number' type="text" placeholder="01"/> */}
            <Button name="ADD TO CART" className="cart"/>
          </div>
        </div>
        <div className='down'>
            <p>Details</p>
            <p>Delivery </p>
            <p>Return</p>
        </div>
      </article>
    </div>
  )
}

export default Stores
