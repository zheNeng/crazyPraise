type callBackFunction = (obj: { ele?: any; index: number }) => void;
export class GetImgArrs {
  // 随机获得图片的
  get getimg() {
    const res = `${this.url}\/${this.width}\/${this.height}\/`;
    return res;
  }
  public resultImgArr: Array < {
    url: string;
    index: number;
  } > = [];
  public current: number = 0;
  public total: number = -1;
  public countSetInterval: any = 0;
  private width: number;
  private height: number;
  private url: string;
  constructor(no: number = 10) {
    this.width = Math.min(innerWidth, 500);
    this.height = innerHeight;
    this.url = 'http://www.lorempixel.com';
    this.changeTotal(no);
    if (!this.countSetInterval) {
      this.countSetInterval = setInterval(() => {
        if (this.current + 1 <= this.total) {
          this.current++;
        } else {
          this.current = 0;
        }
      }, 5000);
    }
  }
  public onload() {
    this.total++;
  }
  public changeTotal( no: number ) {
    const total = this.total + 1;
    this.map(no, ({
      index,
    }) => {
      setTimeout(() => {
        this.resultImgArr.push({
          url: this.getimg,
          index: index + total,
        });
      }, index * 2000);
    });
  }
  public destroyed() {
    clearInterval(this.countSetInterval);
  }
  private map(contain: number | any[], fn: callBackFunction) {
    fn = fn.bind(this);
    if (typeof contain === 'object') {
      contain.forEach((ele: any, index: number) => {
        fn({
          ele,
          index,
        });
      });
    } else {
      for (let index = 0; index < contain; index++) {
        fn({
          index,
        });
      }
    }
  }
}
