无穷级数可以分为**数项级数**和**函数项级数**，二者在实际应用中并无太大差距，但是数项级数从数学上较为根本，所以本章先介绍数项级数

## 数项级数的基本性质

数项级数的定义相当符合直觉，把数列 $\{a_n\}$ 各项依次相加的表达式就是数项级数，或者叫做**常数项无穷级数**，通常以

$$
a_1+a_2+a_3+\cdots+a_n+\cdots
$$

的形式出现，用求和符号记成 $\dst\sum_{n=1}^{\infty}a_n$ ，其中 $a_n$ 叫做**通项**

### 敛散性

定义只提供了数项级数的形式，而最基础的问题是敛散性，也就是 $\dst\sum_{n=1}^{\infty}a_n$ 是否是有限值，首先我们把求和符号的计算扩展到无穷，很自然的办法是使用极限，那么就有

$$
\sum_{i=1}^{\infty}a_i=\lim_{n\to+\infty}\sum_{i=1}^na_i
$$

可以看到这是一个数列极限，我们把每一项记作 $S_n=\dst\sum_{i=1}^{n}a_i$ ，这个 $S_n$ 就是级数的前 $n$ 项和，也叫**部分和**，$\{S_n\}$ 就是部分和数列，自然的，极限 $\dst\lim_{n\to+\infty}S_n$ 存在就代表级数收敛，不存在就代表级数发散，对于收敛级数，其**和**就是该极限值 $S$ ，把 $R_n=S-S_n$ 叫做级数的**余项**

显然，在级数中删去或添加有限项并不改变级数的敛散性，而且收敛级数必有

$$\lim_{n\to\infty}a_n=0$$

### 线性与单调性

对于收敛级数 $\dst\sum_{n=1}^{\infty}a_n$ 和 $\dst\sum_{n=1}^{\infty}b_n$ ，和有限求和一样，满足这几个性质

1. 可以从求和号中提出常数，即 $\dst\sum_{n=1}^{\infty}\lambda a_n=\lambda\sum_{n=1}^{\infty}a_n$ 
2. 可以逐项相加(减)，即 $\dst\sum_{n=1}^{\infty}(a_n\pm b_n)=\sum_{n=1}^{\infty}a_n\pm\sum_{n=1}^{\infty}b_n$ 
3. 可以逐项比较大小，即若 $\forall n\in\mathbb{N}_+$ 都有 $a_n\leq b_n$ ，那么 $\dst\sum_{n=1}^{\infty}a_n\leq\sum_{n=1}^{\infty}b_n$ 

### 运算律

有限求和满足加法交换律和加法结合律，但对于无限求和则要谨慎，有限情况下得到的结论不能随意推广到无限情况

收敛的无穷级数满足**结合律**，可以在级数的各项间任意添加括号，其和不变，也就是若 $\dst\sum_{n=1}^{\infty}a_n=S$ ，则有

$$
(a_1+a_2+a_3)+(a_4+a_5)+\cdots=S
$$

但是反过来是不能任意拆括号的，拆括号得到的级数未必收敛，只有收敛的情况才可以拆括号

把级数 $\dst\sum_{n=1}^{\infty}a_n$ 的各项重新排列会得到一个新级数 $\dst\sum_{n=1}^{\infty}\tilde{a}_n$ ，叫做 $\dst\sum_{n=1}^{\infty}a_n$ 的**重排**，满足**交换律**意味着原级数的所有重排都与原级数相等，可见适用交换律的条件会更严格，要求级数 $\dst\sum_{n=1}^{\infty}a_n$ 必须**绝对收敛**，也就是说 $\dst\sum_{n=1}^{\infty}|a_n|$ 收敛时 $\dst\sum_{n=1}^{\infty}a_n$ 才满足交换律

与绝对收敛相对的是**条件收敛**，也就是 $\dst\sum_{n=1}^{\infty}a_n$ 收敛而 $\dst\sum_{n=1}^{\infty}|a_n|$ 发散，这时 $\dst\sum_{n=1}^{\infty}a_n$ 不仅不满足交换律，而且根据**Riemann 定理**，其重排可以收敛到任何数

## 数项级数的判敛法

数项级数的敛散性也就是极限 $\dst\lim_{n\to+\infty}S_n$ 的敛散性，对于一般的数项级数，$\{S_n\}$ 没有任何特别的性质，不易处理，为此先研究 $a_n\geq0$ 的级数，因为其部分和数列是单调增的。这样的级数叫做**正项级数**

> [!note]
> 满足所有 $a_n\leq0$ 的级数叫做负项级数，不需要单独讨论，把系数 $-1$ 提到级数之外就变为了正项级数

### 正项级数判敛法

正项级数的判敛法相当多样，其中最接近定义的是**有界判别法**

> 正项级数 $\dst\sum_{n=1}^{\infty}a_n$ 收敛的充要条件是其部分和数列 $\{S_n\}$ 有上界

因为单调增有上界数列是收敛的，极限 $\dst\lim_{n\to+\infty}S_n$ 存在，级数自然收敛

==pho==

数项级数可以逐项比较大小，自然的，就有**比较判别法**

> 级数 $\dst\sum_{n=1}^{\infty}a_n$ 和级数 $\dst\sum_{n=1}^{\infty}b_n$ 均为正项级数，如果 $a_n\leq b_n$ 恒成立，那么 $\dst\sum_{n=1}^{\infty}b_n$ 收敛时 $\dst\sum_{n=1}^{\infty}a_n$ 也收敛， $\dst\sum_{n=1}^{\infty}a_n$ 发散时 $\dst\sum_{n=1}^{\infty}b_n$ 也发散

比较判别法更常见的是极限形式，令 $\dst\lim_{n\to\infty}\frac{a_n}{b_n}=\lambda$ ，$\lambda$ 为有限数或者 $+\infty$ ，那么

> 若 $0<\lambda<+\infty$ ，则两级数敛散性相同
> 
> 若 $\lambda=0$ ，则 $\dst\sum_{n=1}^{\infty}b_n$ 收敛时 $\dst\sum_{n=1}^{\infty}a_n$ 也收敛
> 
> 若 $\lambda=+\infty$ ，则 $\dst\sum_{n=1}^{\infty}b_n$ 发散时 $\dst\sum_{n=1}^{\infty}a_n$ 也发散

在高中阶段，我们学过等比数列求和公式，考虑 $q>0$ 的情况

$$
c+cq+cq^2+\cdots+cq^n=\sum_{i=1}^ncq^{i-1}=c\frac{1-q^n}{1-q}
$$

取极限就得到

$$
\sum_{n=1}^{\infty}cq^{n-1}=\lim_{n\to\infty}c\frac{1-q^n}{1-q}
$$

这是个正项等比无穷级数，可见 $q<1$ 时级数收敛， $q\geq1$ 时级数发散，如果对一般的正项级数也能定义出合适的 $q$ ，那么就可以用它判别敛散性

最直接的， $q$ 是等比数列的公比，也就是 $\dfrac{a_{n+1}}{a_n}$ ，由于改变有限项不影响级数的敛散性，我们只考虑 $n\to\infty$ 时的情况，取极限得到 $\dst q=\lim_{n\to\infty}\frac{a_{n+1}}{a_n}$ ，此时就得到了**比值判别法**

> $q<1$ 时，级数收敛
> 
> $1<q\leq+\infty$ 时，级数发散
> 
> $q=1$ 时是临界情况，无法判定(这和等比级数不同)

从另一个角度说，对于等比级数有 $\dst\lim_{n\to\infty}\sqrt[n]{a_n}=q$ ，那么推而广之就有了**根值判别法**，对 $q$ 使用的判定方法和上面的比值判别法相同

然而有一类形式非常简单的级数不论用比值判别法还是根值判别法都无法判断其敛散性，就是 **$p-$级数**，形式为

$$
\sum_{n=1}^{\infty}\frac{1}{n^p}
$$

解决这个问题可以用**积分判别法**，具体的说

> 如果一个函数 $f(n)$ 在 $[1,+\infty)$ 上连续、非负且单调递减，记 $a_n=f(n),n\in\mathbb{N_+}$ ，那么级数 $\dst\sum_{n=1}^{\infty}a_n$ 与积分 $\dst\int_1^{+\infty}f(x)\dd x$ 敛散性相同

这里给出一个图形的证明

![video](Inttest.mp4)

总而言之，应用积分判别法会发现级数 $\dst\sum_{n=1}^{\infty}\frac{1}{n^p}$ 在 $p>1$ 时收敛，而在 $p\leq1$ 时发散

不难发现，这里的 $p$ 与等比级数的 $q$ 具有相似的地位，是决定级数敛散性的唯一参数，那么就仿照之前的方法，试着对一般的正项级数定义合适的 $p$ ，可以发现，在 $p-$级数中有

$$
\frac{a_n}{a_{n+1}}=\frac{(n+1)^p}{n^p}=1+\frac{pn^{p-1}+\cdots+1}{n^p}
$$

那么就知道

$$
p=\lim_{n\to\infty}n(\frac{a_n}{a_{n+1}}-1)
$$

将此式推广到一般正项级数就得到 **Raabe 判别法**

> $1<p\leq+\infty$ 时，级数收敛
> 
> $p<1$ 时，级数发散
> 
> $p=1$ 时是临界情况，无法判定

> [!note]
> 在 $p-$级数中求 $p$ 的另一办法是对数，因为
> 
> $$
> p=\lim_{n\to\infty}-\log_na_n=\lim_{n\to\infty}-\frac{\ln a_n}{\ln n}
> $$
> 
> 推广到一般正项级数就是**对数判别法**，对 $p$ 使用的判定方法与 Raabe 判别法相同

### 交错级数判敛法

正项和负项交替出现的级数叫做**交错级数**，可以表示为 $\dst\sum_{n=1}^{\infty}(-1)^{n-1}a_n$ ，其中 $a_n>0$ ，如果数列 $\{a_n\}$ 还满足 $\dst\lim_{n\to\infty}a_n=0$ 并且单调递减，那么这个交错级数就称为 **Leibniz 级数**，与之对应的是 **Leibniz 判别法**

> Leibniz 级数 $\dst\sum_{n=1}^{\infty}(-1)^{n-1}a_n$ 必定收敛，且
> 
> $$
> \sum_{n=1}^{\infty}(-1)^{n-1}a_n\leq a_1
> $$
> 
> 余项 $R_n$ 满足 $|R_n|\leq a_{n+1}$

==pho==

### 数项级数通用判敛法

对于一般的数项级数，也有一些判别方法，其中最根本的就是**部分和判别法**，或者说就是使用定义

> $\dst\sum_{n=1}^{\infty}a_n=\lim_{n\to\infty}S_n$

极限存在时就收敛，是一个充要条件

但是一般情况下级数的部分和并不容易写出，所以还需要寻找一些其他的充分条件，最简单的是**绝对收敛准则**

> 若 $\dst\sum_{n=1}^{\infty}|a_n|$ 收敛，则 $\dst\sum_{n=1}^{\infty}a_n$ 必收敛

==anim==

另一个想法是把级数的正项和负项分开，拆解为正部 $a_n^+$ 和负部 $a_n^-$ 

$$
\begin{align}
&a_n^+=\begin{cases}
|a_n|,&a_n\geq0\\
0,&a_n<0
\end{cases}\\[2ex]
&a_n^-=\begin{cases}
0,&a_n\geq0\\
|a_n|,&a_n<0
\end{cases}
\end{align}
$$

这样原级数 $\dst\sum_{n=1}^{\infty}a_n$ 就化为了两个正项级数 $\dst\sum_{n=1}^{\infty}a_n^+$ 和 $\dst\sum_{n=1}^{\infty}a_n^-$ ，那么就有

> $\dst\sum_{n=1}^{\infty}a_n$ 绝对收敛的充要条件是正项级数 $\dst\sum_{n=1}^{\infty}a_n^+$ 和 $\dst\sum_{n=1}^{\infty}a_n^-$ 均收敛
> 
> $\dst\sum_{n=1}^{\infty}a_n$ 条件收敛则 $\dst\sum_{n=1}^{\infty}a_n^+$ 和 $\dst\sum_{n=1}^{\infty}a_n^-$ 均发散

最后是 **Cauchy 收敛准则**，~~名字里带有 Cauchy 的东西似乎总是又繁琐又难用~~，具体的说

> $\dst\sum_{n=1}^{\infty}a_n$ 收敛的充要条件是 $\forall\varepsilon>0$ ，均 $\exists N\in\mathbb{N}_+$ ，使得当 $n>N$ 时， $\forall p\in\mathbb{N}_+$ ，恒有 $\dst\left|\sum_{k=n+1}^{n+p}a_k\right|<\varepsilon$

这个写法看起来相当令人望而生畏，好在可以用极限重写这个准则

> $\dst\sum_{n=1}^{\infty}a_n$ 收敛的充要条件是 $\dst\lim_{m,n\to\infty}|S_m-S_n|=0$
> 
> (注意二重极限 $\dst\lim_{m,n\to\infty}$ 和累次极限 $\dst\lim_{n\to\infty}\lim_{m\to\infty}$ 不一样)

常见的处理方法是夹逼定理，从 $|S_m-S_n|$ 去掉一个变量

END