<template>
    <div>
        <div v-if="quizStatus === 'pre'">
            <div class="mb-4">
                <h2 style="color: white;">梅溪湖的</h2>
                <div class="p-2 board">
                    <h1 class="font-weight-bold" style="color: white;">提词器</h1>
                </div>
                <p class="m-2">制作: 驼驼</p>
            </div>
            <div class="button6" @click="quizStatus = 'selectMode'">开始游戏</div>
        </div>
        <div v-if="quizStatus === 'selectMode'">
            <div class="row">
                <div class="button6 col" style="background-color: lightgoldenrodyellow" @click="startQuiz(10)">普通</div>
            </div>
            <div class="row">
                <div class="button6 col" style="background-color: lightcoral" @click="startQuiz(5)">困难</div>
            </div>
        </div>
        <div v-if="quizStatus === 'during'" class="question-text m-2">
            <h5>得分：{{score}}</h5>
            <div class="m-2 mb-4">
                <svg :key="currentQuestion">
                    <circle r="18" cx="20" cy="20" ></circle>
                </svg>
                <div>{{countdown}}</div>
            </div>
            <h3>第{{currentQuestion+1}}道题</h3>
            <p class="m-2" style="white-space: pre-line">{{question}}</p>
            <div v-for="(opt, index) in options" :key="index">
                <div class="button6 options m-1" @click="chooseAns(opt)">
                    <strong style="color: darkslategray">{{['A', 'B', 'C'][index]}} {{opt}}</strong>
                </div>
            </div>
        </div>
        <div v-if="quizStatus === 'post'" class="question-text m-2">
            <h3>恭喜你获得了</h3>
            <h2>{{score}}分</h2>
            <p style="white-space: pre-line">{{scoreMsg}}</p>
            <div class="button6 return m-1" @click="resetPage">再玩一次</div>
        </div>
    </div>
</template>

<script>
  import lyrics from "../assets/lyrics"
  import btnSound from "../assets/Tiny Button Push-SoundBible.com-513260752.wav"

  export default {
    name: "Quiz",
    data: function () {
      return {
        lyrics: [],
        language: 'chinese',
        timerMode: 10,
        currentQuestion: 0,
        score: 0,
        quizStatus: "pre",
        countdown: 5,
        countdownInterval: null,
        sound: new Audio(btnSound)
      }
    },
    mounted: function () {
      this.resetPage()
    },
    computed: {
      question: function () {
        return this.lyrics[this.currentQuestion]['lyrics']
      },
      options: function () {
        let opts = this.lyrics[this.currentQuestion]['options'];
        return opts.sort(() => Math.random() - 0.5)
      },
      answer: function () {
        return this.lyrics[this.currentQuestion]['answer']
      },
      scoreMsg: function () {
        if (this.score === 100) {
          return '最强大脑！\n梅溪湖最聪明的崽就是你！'
        } else if (this.score > 70) {
          return '蹬腿就上，脱鞋就唱！'
        } else if (this.score > 40) {
          return '你这水平，我觉得平凡...\n回去再背一背歌词吧'
        } else {
          return '提词器也救不了你这记忆力...\n我看你是不认字儿吧！'
        }
      }
    },
    methods: {
      startQuiz: function (timerMode) {
        this.timerMode = timerMode;
        this.countdown = timerMode;
        this.sound.play();
        this.quizStatus = 'during';
        this.timer();
      },
      nextQuestion: function () {
        this.clearTimer();
        if (this.currentQuestion < (this.lyrics.length - 1)) {
          this.currentQuestion++;
          this.timer()
        } else if (this.currentQuestion === (this.lyrics.length - 1)) {
          this.quizStatus = 'post';
        }
      },
      timer: function () {
        this.countdownInterval = setInterval(() => {
            if (this.countdown === 1) {
              this.nextQuestion()
            } else {
              --this.countdown
            }
        }, 1000)
      },
      clearTimer: function () {
        clearTimeout(this.countdownInterval);
        this.countdown = this.timerMode;
      },
      chooseAns: function (opt) {
        this.sound.play();
        if (opt === this.answer) {
          this.score += 10
        }
        this.nextQuestion()
      },
      resetPage: function () {
        this.clearTimer();
        this.sound.play();
        this.lyrics = lyrics[this.language].sort(() => Math.random() - 0.5).slice(0, 10);
        this.quizStatus = 'pre';
        this.score = 0;
        this.currentQuestion = 0;
      }
    }
  }
</script>

<style scoped>
.question-text {
    color: white;
}
.board {
    background-color: #282829;
    border-style: solid;
    border-width: 5px;
    border-color: darkgrey;
}
</style>