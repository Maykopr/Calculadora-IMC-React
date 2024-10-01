export default function CalcularBtn({ func }) {
      return (
            <div class=" d-flex justify-content-center p-1">
                  <button class="btn btn-primary" onClick={func}>
                        Calcular
                  </button>
            </div>
      );
}
