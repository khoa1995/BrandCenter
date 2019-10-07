<template>
  <div class="bc-criteria d-flex">
      <div class="bc-criteria__item">
        <div class="bc-criteria__item-close"></div>
        <div class="bc-criteria__item-text">
            <img class="bc-criteria__item-icon"/>
            <span>Social</span>
        </div>
      </div>
      <div class="bc-criteria__count">
          <span class="bc-criteria__count-number">1</span>
          <span>item(s) found</span>
      </div>
  </div>
</template>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.bc-criteria {
    &__item {
        display: flex;
        align-items: center;
        cursor: pointer;
        color: #151515;
        padding: 5px 20px;
        margin-right: 10px;
        margin-bottom: 10px;
        -webkit-border-radius: 50px;
        -moz-border-radius: 50px;
        border-radius: 4px;
        background-color: $color-border;
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        transition: all 0.3s ease;
        &-close {
            position: relative;
            top: -2px;
            width: 13px;
            height: 13px;

            &::before {
                top: 50%;
                left: 0;
                -webkit-transform: rotate(45deg);
                -moz-transform: rotate(45deg);
                transform: rotate(45deg);
            }
            &::after {
                top: 50%;
                left: 0;
                -webkit-transform: rotate(-45deg);
                -moz-transform: rotate(-45deg);
                transform: rotate(-45deg);
            }
            &::before, &::after {
                position: absolute;
                content: '';
                width: 15px;
                height: 2px;
                background-color: $color-black;
                -webkit-border-radius: 3px;
                -moz-border-radius: 3px;
                border-radius: 3px;
                -webkit-transition: all 0.5s ease;
                -moz-transition: all 0.5s ease;
                transition: all 0.5s ease;
            }
        }
        &-text {
            font-size: 1rem;
            margin-left: 10px;
        }
        &:hover {
            color: $color-white;
            background-color: adjust-color($color-video, $lightness: 10%);;
            .bc-criteria__item-close {
                &::before, &::after {
                    background-color: $color-white;
                    -webkit-transform: none;
                    -moz-transform: none;
                    transform: none;
                }
            }
        }
    }
    &__count {
        &-number {
            border-radius: 4px;
            padding: 3px 15px;
            margin-right: 5px;
            background-color: $color-white;
            display: inline-block;
        }
    }
}
</style>
