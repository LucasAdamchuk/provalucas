export default function Body(){
  return(
  <div>
    <div className="font-bold">
      <h3>Adipiscing amet consequat</h3>
    </div>
    <div className="mt-6 grid gap-4 items-center md:grid-cols-2 lg:grid-cols-3">
       <div className="rounded-2xl bg-[#4d4d4d]">
        <a href="https://google.com">
        <img src="/img/perna.svg" alt="" />
        <div>
          <h4>Curso de HTML</h4>
          <p>O Curso de HTML é legal ...</p>
        </div>
      </a>
      </div>

    <div className="rounded-2xl bg-[#4d4d4d]">
      <a href="https://google.com">
      <img src="/img/rua.svg" alt="" />
      <div>
        <h4>Curso de CSS</h4>
        <p>O Curso de CSS é bacana ...</p>
      </div>
    </a>
    </div>

    <div className="rounded-2xl bg-[#4d4d4d]">
      <a href="https://google.com">
      <img src="/img/casa.svg" alt="" />
      <div>
        <h4>Curso de JS</h4>
        <p>O Curso de JS é Supimpa ...</p>
      </div>
    </a>
    </div>
  </div>
</div>

  )
  
}