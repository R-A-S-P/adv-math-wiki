## 函数项级数的基本概念

函数项级数和数项级数十分相似，只要把数列 $\{a_n\}$ 换成具有公共定义域 $E$ 的函数列 $\{u_n(x)\}$ ，那么 $\dst\sum_{n=1}^{\infty}u_n(x)$ 就成为了函数项级数，一样的，这代表

$$
u_1(x)+u_2(x)+u_3(x)+\cdots+u_n(x)+\cdots
$$

通项与部分和的定义也是一样的，只不过都变为了函数，自然的，对于每一个 $x_0\in E$ ，$\dst\sum_{n=1}^{\infty}u_n(x_0)$ 就是一个数项级数，有收敛与发散之分，使其收敛的 $x_0$ 就叫做**收敛点**，也可以说 $\dst\sum_{n=1}^{\infty}u_n(x)$ 在 $x_0$ 收敛

收敛点的全体就叫做**收敛域**，在收敛域上，级数的和存在，这自然也是 $x$ 的函数，叫做**和函数** $\dst S(x)=\sum_{n=1}^{\infty}u_n(x)$ ，**余项**也是一样，是 $R_n(x)=S(x)-S_n(x)$ 

以上的收敛方式是单独考察每一个点的收敛情况的，称为**逐点收敛**或者**点态收敛**

## 一致收敛级数

如果只研究逐点收敛级数的话，完全可以在每个点用数项级数的方法研究，这就失去了发明函数项级数的意义，所以一定有一类函数项级数存在某些特殊的性质，值得专门建立理论，这类级数就是一致收敛级数，其定义为

> $\forall\varepsilon>0$ ，均 $\exists N(\varepsilon)\in\mathbb{N}_+$ ，使得当 $n>N(\varepsilon)$ 时， $\forall x\in D$ 都有 $|S_n(x)-S(x)|<\varepsilon$ ，则称函数项级数 $\dst\sum_{n=1}^{\infty}u_n(x)$ 在 $D$ 上一致收敛于 $S(x)$ 

自然的，这种形式让我们希望能用极限进行改写，就有了等价的

> $\dst\lim_{n\to\infty}\left(\sup_{x\in D}|S_n(x)-S(x)|\right)=0$ ，则级数 $\dst\sum_{n=1}^{\infty}u_n(x)$ 在 $D$ 上一致收敛于 $S(x)$ 

显然，一致收敛级数一定逐点收敛

> [!note]
> 函数空间

### 判别法

通过定义判定级数是否一致收敛大多数时候是困难的，因为要求出和函数，然而很多时候求和函数反而要利用一致收敛性，甚至于难以求出和函数，因此需要一些简单的判别法

最根本的是 **Cauchy 一致收敛准则**

> $\dst\sum_{n=1}^{\infty}u_n(x)$ 在 $D$ 上一致收敛的充要条件是 $\forall\varepsilon>0$ ，都 $\exists N(\varepsilon)\in\mathbb{N}_+$ ，使得当 $n>N(\varepsilon)$ 时， $\forall p\in\mathbb{N}_+$ ，以及 $\forall x\in D$ 都有 $\dst\left|\sum_{k=n+1}^{n+p}u_k(x)\right|<\varepsilon$

依旧是用相当复杂的 $\varepsilon$ 语言写成的，好在和数项级数的 Cauchy 收敛准则一样可以用极限重写，一致收敛的定义比逐点收敛多一个上确界， Cauchy 收敛准则也比 Cauchy 收敛准则多一个上确界

> $\dst\sum_{n=1}^{\infty}u_n(x)$ 在 $D$ 上一致收敛的充要条件是 $\dst\lim_{m,n\to\infty}\left(\sup_{x\in D}|S_n(x)-S_m(x)|\right)=0$

极限还是较为复杂，在数项级数部分，我们运用放缩与夹逼定理实现了变量的消去，参考这个做法，我们自然会想，如果能通过级数逐项比较大小的性质消去函数中的 $x$ ，把函数项级数化为数项级数，问题就会简化，这就是 **Weierstrass 判别法**，或者叫 **$M-$判别法**，**优级数判别法**皆可

> 若能找到收敛的正项级数 $\dst\sum_{n=1}^{\infty}M_n$ 使得 $|u_n(x)|\leq M_n$ 在 $x\in D$ 恒成立，那么 $\dst\sum_{n=1}^{\infty}u_n(x)$ 在 $D$ 上一致收敛

级数 $\dst\sum_{n=1}^{\infty}M_n$ 称为**优级数**或**控制级数**，不难发现，对于 Weierstrass 判别法判敛的级数 $\dst\sum_{n=1}^{\infty}u_n(x)$ ，其绝对值级数 $\dst\sum_{n=1}^{\infty}|u_n(x)|$ 也在 $D$ 上一致收敛，这种性质叫做级数 $\dst\sum_{n=1}^{\infty}u_n(x)$ 在 $D$ 上**绝对一致收敛**

### 性质