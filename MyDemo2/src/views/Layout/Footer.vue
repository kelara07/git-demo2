<template>
    <!-- 頁尾 -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg">
            <div class="row g-0 gy-3">
              <div class="col-12">
                <div class="d-flex justify-content-start align-items-center">
                  <a
                    href="https://page.line.me/266pophi?openQrModal=true"
                    class="m-r-10"
                    target="_blank"
                    rel="noopener"
                    ><img src="@/images/LINE-BTN.png" alt="" class="line-btn"
                  /></a>
                  <!-- <a
                    href="http://www.gouptech.com.tw/CloudWinner%20Help/teaching.html"
                    class="btn btn-primary pt-1 pb-1"
                    >新手教學</a
                  > -->
                </div>
              </div>
              <div class="col-6 col-lg-12 col-xl-6 footer-link-box">
                <img src="@/images/icon-phone.svg" alt="" width="18" /><a href="tel:+886-2-26547969"
                  >+886-2-26547969</a
                >
              </div>
              <div class="col-6 col-lg-12 col-xl-6 footer-link-box">
                <img src="@/images/icon-web.svg" alt="" width="18" /><a
                  href="https://www.gouptech.com.tw/"
                  target="_blank"
                  rel="noopener"
                  >昇華科技官網<img src="@/images/icon-out-link.svg" alt="" width="18"
                /></a>
              </div>
              <div class="col-6 col-lg-12 col-xl-6 footer-link-box">
                <img src="@/images/icon-fb.svg" alt="" width="18" /><a
                  href="https://www.facebook.com/winnerhappiness?fref=ts"
                  target="_blank"
                  rel="noopener"
                  >粉絲專頁<img src="@/images/icon-out-link.svg" alt="" width="18"
                /></a>
              </div>
              <div class="col-6 col-lg-12 col-xl-6 footer-link-box">
                <img src="@/images/icon-policy.svg" alt="" width="18" /><a
                  href="https://gouptech.com.tw/%E9%9A%B1%E7%A7%81%E6%AC%8A%E4%BF%9D%E8%AD%B7%E6%94%BF%E7%AD%96"
                  target="_blank"
                  rel="noopener"
                  >隱私權政策<img src="@/images/icon-out-link.svg" alt="" width="18"
                /></a>
              </div>
            </div>
            <hr class="d-lg-none" />
          </div>
          <div class="col-12 col-lg">
            <div>
              <div class="row">
                <div class="col-auto col-lg-12 mb-md-2 col-xl-auto mb-xl-0">
                  <img src="@/images/ISO27001-2022_UCE-GOUP-01.png" alt="" width="180" />
                </div>
                <div class="col col-lg-12 col-xl">
                  <div class="m-b-10">專利證號</div>
                  <div>新型第M580753號</div>
                </div>
              </div>
            </div>
            <hr class="d-lg-none" />
          </div>
          <div class="col-12 col-lg-auto">
            <Copyright />
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  import Copyright from '@/layout/main/Copyright.vue'
  </script>
  
  <style scoped></style>
  